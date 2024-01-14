import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import ServiceContext from '../../../services/ServiceContext';

export function OverviewMapComponent({ navigation }) {
    const [visibleMarkers, setVisibleMarkers] = useState([]);
    const services = useContext(ServiceContext);

    // Get all markers from database
    useEffect(() => {
        (async() => {
            const startPins = await services.Locations.getAllStartPins();
            setVisibleMarkers(startPins);
        })();
    },[]);
    
    function clickMarker(m) {
        navigation.navigate('EventDetails', {locationId: m.key});
    }
    
    return (
        <>
            <Text>Loading... Please Wait</Text>
            {visibleMarkers && <MapView
                style={styles.map}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
            >
                {visibleMarkers.map((m) => <Marker onPress={clickMarker.bind(this,m)} {...m} />)}
                {/* <Marker coordinate={{latitude:50,longitude:50}} icon={} /> */}
            </MapView>}
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

export default OverviewMapComponent;
