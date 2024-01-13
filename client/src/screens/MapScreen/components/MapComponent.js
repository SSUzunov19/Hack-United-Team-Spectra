import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Pedometer } from 'expo-sensors';
import {isPointWithinRadius} from 'geolib';
import * as Location from 'expo-location';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';

import ServiceContext from '../../../services/ServiceContext';

export function MapComponent() {
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [constantWorldMarkers, setConstantWorldMarkers] = useState([]);
    const [visibleMarkers, setVisibleMarkers] = useState(constantWorldMarkers.map(x=>x));
    const [currentlySelectedMarker,setCurrentlySelectedMarker] = useState(null);
    const [location,setLocation] = useState(null);
    const [routePolyline,setRoutePolyline] = useState({coordinates:[], points: []});
    const services = useContext(ServiceContext);

    // Location data
    useEffect(() => {
        (async () => {
          
          let { statusForeground } = await Location.requestForegroundPermissionsAsync();
          let { statusBackground } = await Location.requestBackgroundPermissionsAsync();
          if (statusForeground !== 'granted' && statusBackground !== 'granted') {
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
    }, [location]);

    // Get all markers from database
    useEffect(() => {
        (async() => {
            const startPins = await services.Locations.getAllStartPins();
            setConstantWorldMarkers(startPins);
            setVisibleMarkers(startPins);
        })();
    },[]);

    // Step counter
    useEffect(() => {
        const subscribe = async () => {
            const isAvailable = await Pedometer.isAvailableAsync();
        
            if (isAvailable) {
                return Pedometer.watchStepCount(result => {
                    setCurrentStepCount(result.steps);
                });
            }
            return () => {setCurrentStepCount(-1)}
        };

        subscribe();
    }, [currentStepCount]);
    
    function openPin(m) {
        if (m.key.startsWith("2!") || currentlySelectedMarker!=null) return;

        (async () => {
            setCurrentlySelectedMarker(m);
            const routeData = await services.Locations.getFullRoute(m.key);
            setRoutePolyline(routeData.polyline);
            setVisibleMarkers([routeData.markerStart,routeData.markerEnd]);
        })();
    }

    function closePin() {
        setVisibleMarkers(constantWorldMarkers);
        setCurrentlySelectedMarker(null);
        setRoutePolyline({coordinates:[], points: []});
    }

    function isInsideMarkerArea(radius=25) {
        if (location == null) return false;

        console.log("calc ",location.coords)
        return isPointWithinRadius(location.coords, currentlySelectedMarker.coordinate, radius)
    }
    
    return (
        <>
            <MapView
                style={styles.map}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
            >
                {visibleMarkers.map((m) => <Marker onPress={openPin.bind(this,m)} {...m} />)}
                <Polyline {...routePolyline} />

            </MapView>
            <Text>{currentStepCount}</Text>
            <Button onPress={closePin} title="Close" />
            {currentlySelectedMarker && <Text>{isInsideMarkerArea()?"da":"ne"}</Text>}
        </>
    );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    flex: 1,
  },
});

export default MapComponent;
