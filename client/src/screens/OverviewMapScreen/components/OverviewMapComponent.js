import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, Image } from 'react-native';
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
        navigation.navigate('Challenge', {locationId: m.key});
    }
    
    return (
        <>
            <Text>Loading... Please Wait</Text>
            {visibleMarkers && <MapView
                style={styles.map}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
            >
                {visibleMarkers.map((m) => 
                    <Marker onPress={clickMarker.bind(this,m)} {...m}>
                        <Image source={require("../../../assets/images/pin.png")} style={{width: 25, height: 25}} />
                    </Marker>
                )}
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
