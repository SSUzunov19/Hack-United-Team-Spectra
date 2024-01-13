import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Pedometer } from 'expo-sensors';
import * as Location from 'expo-location';


import MapView from 'react-native-maps';

export function MapComponent() {
    const [currentStepCount, setCurrentStepCount] = useState(0);
    const [markers, setMarkers] = useState([]);
    const [location,setLocation] = useState(null);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

    // Get all markers from database
    useEffect(() => {
        // fetch
        setMarkers([
            {
                latitude: 45.65,
                longitude: -78.90,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
            },
            {
                latitude: 44.65,
                longitude: -78.90,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
            },
            {
                latitude: 46.65,
                longitude: -78.90,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
            },
            {
                latitude: 47.65,
                longitude: -78.90,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
            },
        ]);
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
        //return () => {setCurrentStepCount(-1)}
    }, [currentStepCount]);

    return (
        <>
            <MapView
                style={styles.map}
                showsUserLocation={true}

                annotations={markers}
            >
                
            </MapView>    
            <Text>{currentStepCount}</Text>
            <Text>{location&&location.latitude}</Text>
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
