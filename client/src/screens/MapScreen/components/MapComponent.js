import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Pedometer } from 'expo-sensors';
import {isPointWithinRadius} from 'geolib';
import * as Location from 'expo-location';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import ServiceContext from '../../../services/ServiceContext';

export function MapComponent() {
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [constantWorldMarkers, setConstantWorldMarkers] = useState([]);
    const [visibleMarkers, setVisibleMarkers] = useState(constantWorldMarkers.map(x=>x));
    const [currentlySelectedMarker,setCurrentlySelectedMarker] = useState(null);
    const [location,setLocation] = useState(null);
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
    }, []);

    // Get all markers from database
    useEffect(() => {
        (async() => {
            const startPins = await services.Locations.getAllStartPins();
            console.log(startPins);
            setConstantWorldMarkers(startPins);
            setVisibleMarkers(startPins);
        })();
    },[]);

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
        console.log(currentlySelectedMarker)
        setCurrentlySelectedMarker(m);
        setVisibleMarkers([m]);
        // get route
    }

    function closePin() {
        console.log(currentlySelectedMarker)
        setVisibleMarkers(constantWorldMarkers.map(x=>x));
        setCurrentlySelectedMarker(null);
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
