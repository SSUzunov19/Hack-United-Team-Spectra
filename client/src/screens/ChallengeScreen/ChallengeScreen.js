import React, { useEffect, useState,useContext,useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';


import ServiceContext from '../../services/ServiceContext';
import { InfoSection } from './components/InfoSection';
import { BottomSection } from './components/BottomSection';

export function ChallengeScreen({ route, navigation }) {
    const { challengeId,locationId } = route.params;
    const [challenge,setChallenge] = useState(null);
    const services = useContext(ServiceContext);

    useEffect(() => {
        console.log(locationId);
        (async ()=>{
            if(locationId) {
                
                setChallenge(await services.Challenges.getChallengeByLocationId(locationId));
            } else {
                setChallenge(await services.Challenges.getChallengeById(challengeId));
            }
        })();
    },[]);

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/challenge-image.png')}
                style={styles.image}
            >
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>12 Jan 2024 - 15 Jan 2024</Text>
                    <Text style={styles.membersText}>57 members</Text>
                </View>
            </ImageBackground>

            <Text style={styles.title}>Newbie Steps</Text>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            </Text>

            <Text style={styles.goalNumber}>10,000</Text>
            <Text style={styles.goalDescription}>total steps</Text>

            <InfoSection />
            
            <BottomSection/>
            {challenge?
            <TouchableOpacity style={styles.inviteButton} onPress={navigation.navigate('MainMap',{challenge:challenge})}>
                <Text style={styles.buttonText}>Join Challenge</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.inviteButton}>
                <Text style={styles.buttonText}>Join Challenge</Text>
            </TouchableOpacity>}

            <TouchableOpacity style={styles.inviteButton}>
                <Text style={styles.inviteButtonText}>Invite Friends</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200,
        position: 'relative',
    },
    dateContainer: {
        marginBottom: 10,
        marginLeft: 25,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 100,
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    dateText: {
        fontFamily: 'NeueMontreal-Regular',
        marginLeft: 4,
        width: 200,
        color: '#000',
        fontWeight: 'bold',
    },
    membersText: {
        fontFamily: 'NeueMontreal-Regular',
        position: 'absolute',
        right: 0,
        color: '#000',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 100,
    },
    title: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 30,
        width: '85%',
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    description: {
        fontFamily: 'NeueMontreal-Regular',
        fontSize: 14,
        width: '85%',
        textAlign: 'left',
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    goalNumber: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 46,
        textAlign: 'center',
        marginVertical: 10,
    },
    goalDescription: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
        marginTop: -10,
    },
    detailItem: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 5,
    },
    hostContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    hostText: {
        fontSize: 16,
        marginBottom: 10,
    },
    joinButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 25,
        width: '80%',
        alignItems: 'center',
    },
    joinButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    inviteButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 25,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    inviteButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
