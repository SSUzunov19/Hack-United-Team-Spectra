import React from "react";
import { Button,View,Text } from "react-native-elements";

export function EventDetailsScreen({navigation, locationId}) {
    console.log(locationId);
    return (
        <>
            <Text>EventDetailsScreen</Text>
            <Button title="Check out on map" onPress={() => navigation.navigate('MainMap', {locationId: locationId})} />
        </>
    );
}