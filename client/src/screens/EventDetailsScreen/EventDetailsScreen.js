import React, { useState,useEffect,useContext } from "react";
import { Button,Text } from "react-native-elements";

import ServiceContext from "../../services/ServiceContext";


export function EventDetailsScreen({navigation, route}) {
    const {locationId} = route.params;
    const [challenge, setChallenge] = useState(null);
    const services = useContext(ServiceContext);

    useEffect(() => {
        (async () => {
            const chlg = await services.Challenges.getChallengeByLocationId(locationId);
            setChallenge(chlg);
        })()
    }, []);

    console.log("event loc ",locationId)
    console.log(challenge);

    return (
        <>
            <Text>EventDetailsScreen</Text>
            {challenge && <Button title="Check out on map" onPress={() => navigation.navigate('MainMap', {challenge})} />}
        </>
    );
}