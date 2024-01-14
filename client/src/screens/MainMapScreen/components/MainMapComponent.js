import React, {useState, useEffect, useContext, useRef} from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Pedometer } from 'expo-sensors';
import {isPointWithinRadius} from 'geolib';
import * as Location from 'expo-location';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import * as TaskManager from 'expo-task-manager';

import ServiceContext from '../../../services/ServiceContext';

const requestPermissions = async () => {
    const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
    if (foregroundStatus === 'granted') {
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus === 'granted') {
        await Location.startLocationUpdatesAsync("BG-LOC-TRACK", {
            accuracy: Location.Accuracy.BestForNavigation,
            distanceInterval: 0,
            timeInterval: 0,
            foregroundService: {
              notificationTitle: "Spectra",
              notificationBody: "Location is used when user is running route",
            },
            activityType: Location.ActivityType.Fitness,
            showsBackgroundLocationIndicator: true,
            pausesUpdatesAutomatically: false,
        });
      }
    }
};

let loc = null;

(async () => {
    console.log(await TaskManager.getRegisteredTasksAsync());
    if(TaskManager.isTaskDefined("BG-LOC-TRACK")) {
        await TaskManager.unregisterTaskAsync("BG-LOC-TRACK")
    }
    
    TaskManager.defineTask("BG-LOC-TRACK", async ({ data: { locations }, error }) => {
        if (error) {
          console.log("err ",error.message);
          return;
        }
        loc=locations[0];
        //console.log(loc)
    });
    await requestPermissions();
})()

export function MainMapComponent({ challenge }) {
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [visibleMarkers, setVisibleMarkers] = useState([]);
    const [routePolyline,setRoutePolyline] = useState({coordinates:[], points: []});
    const [isChallengeStarted, setIsChallengeStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const startTime = useRef(null);
    const location = useRef(null);
    const endTime = useRef(null);
    const services = useContext(ServiceContext);

    // Setup route and markers
    useEffect(() => {
        (async () => {
            const routeData = await services.Locations.getFullRoute(challenge.locationId);
            setRoutePolyline(routeData.polyline);
            setVisibleMarkers([routeData.markerStart,routeData.markerEnd]);
        })();
    }, []);

    // Get location every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            location.current=loc;
            console.log(location.current);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Timer
    useEffect(() => {
        if (!isChallengeStarted) return;
        const interval = setInterval(() => {
            setTimer(p=>p+=1);
        },1000);
        return () => clearInterval(interval);
    },[isChallengeStarted]);

    // Step counter
    useEffect(() => {
        if (!isChallengeStarted) return;

        (async () => {
            const isAvailable = await Pedometer.isAvailableAsync();
        
            if (isAvailable) {
                return Pedometer.watchStepCount(result => {
                    setCurrentStepCount(result.steps);
                });
            }
            return () => {setCurrentStepCount(-1)}
        })();
    }, [currentStepCount,isChallengeStarted]);

    // Detect if challenge is completed
    useEffect(() => {
        if (!isChallengeStarted) return;

        if (isInsideMarkerArea(visibleMarkers[1])) {
            endChallenge();
        }
    },[location])

    function isInsideMarkerArea(marker, radius=25) {
        if (location.current == null || !marker) return false;
        return isPointWithinRadius(location.current.coords, marker.coordinate, radius)
    }

    function startChallenge() {
        startTime.current = Date.now();
        setIsChallengeStarted(true);
        console.log("start")
    }

    function endChallenge() {
        endTime.current = Date.now();
        setIsChallengeStarted(false);
        // services to challenge...
        console.log("end", startTime, endTime, currentStepCount);
    }

    return (
        <>
            {visibleMarkers.length>0&&<MapView
                style={styles.map}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: visibleMarkers[0].coordinate.latitude,
                    longitude: visibleMarkers[0].coordinate.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {visibleMarkers.map((m) => <Marker {...m} />)}
                <Polyline {...routePolyline} />

            </MapView>}
            {isChallengeStarted && <Text>Step Count: {currentStepCount}</Text>}
            {isChallengeStarted && <Text>Time: {timer}</Text>}
            {visibleMarkers && isInsideMarkerArea(visibleMarkers[0]) && !isChallengeStarted && <Button onPress={startChallenge} title="Start" />}
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
