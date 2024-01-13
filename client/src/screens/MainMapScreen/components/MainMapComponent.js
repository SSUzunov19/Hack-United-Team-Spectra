import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Pedometer } from 'expo-sensors';
import {isPointWithinRadius} from 'geolib';
import * as Location from 'expo-location';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';

import ServiceContext from '../../../services/ServiceContext';

export function MainMapComponent({ locationId }) {
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [visibleMarkers, setVisibleMarkers] = useState(constantWorldMarkers.map(x=>x));
    const [location,setLocation] = useState(null);
    const [routePolyline,setRoutePolyline] = useState({coordinates:[], points: []});
    const [isChallengeStarted, setIsChallengeStarted] = useState(false);
    const services = useContext(ServiceContext);

    // Setup route and markers
    useEffect(() => {
        (async () => {
            const routeData = await services.Locations.getFullRoute(m.key);
            setRoutePolyline(routeData.polyline);
            setVisibleMarkers([routeData.markerStart,routeData.markerEnd]);
        })();
    }, []);

    // Location data
    useEffect(() => {
        (async () => {
            let loc = await Location.getCurrentPositionAsync({ "accuracy": Location.Accuracy.High });
            setLocation(loc);
        })();
    }, [location]);

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

    function isInsideMarkerArea(radius=25) {
        if (location == null || location.coords.speed<0.5) return false;

        console.log("calc ",location.coords)
        return isPointWithinRadius(location.coords, currentlySelectedMarker.coordinate, radius)
    }

    function startChallenge() {
        const startDate = Date.now();
        setIsChallengeStarted(true);
        console.log("start")
    }

    function endChallenge() {
        setIsChallengeStarted(false);
        console.log("end")
    }

    console.log(locationId);
    
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
            {currentlySelectedMarker && isInsideMarkerArea() && <Button onPress={startChallenge} title="Start" />}
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

export default MainMapComponent;
