import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RNDateTimePicker  } from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

export function CreateChallengeScreen() {
    const [challengeName, setChallengeName] = useState('');
    const [startLocation, setStartLocation] = useState(null);
    const [endLocation, setEndLocation] = useState(null);
    const [selectingLocationFor, setSelectingLocationFor] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [participantLimit, setParticipantLimit] = useState('');
    const [entryFee, setEntryFee] = useState('');
    const [challengeDescription, setChallengeDescription] = useState('');
    const [image, setImage] = useState(null);
    const [initialRegion, setInitialRegion] = useState({
        latitude: 42.6977,
        longitude: 23.3219,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
    });

    const onMapPress = (e) => {
        const location = e.nativeEvent.coordinate;
        if (selectingLocationFor === 'start') {
            setStartLocation(location);
        } else if (selectingLocationFor === 'end') {
            setEndLocation(location);
        }
    };

    const handleImageUpload = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                // You can use the selected image URI here.
                setImage(result.uri);
            }
        } catch (error) {
            console.error('Error picking an image', error);
        }
    };

    const handleCreateEvent = () => {
        // Event creation logic here
    };

    const setDate = (event, date) => {
        const {
          type,
          nativeEvent: {timestamp, utcOffset},
        } = event;
        console.log(timestamp, utcOffset, date, type);
      };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Create Event</Text>

            <Text style={styles.label}>Event Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Eye of the Tiger Sprint"
                onChangeText={setChallengeName}
                value={challengeName}
            />

            <Text style={styles.label}>Location</Text>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={initialRegion}
                    onPress={onMapPress}
                >
                    {startLocation && (
                        <Marker
                            coordinate={startLocation}
                            title={"Start Location"}
                        />
                    )}
                    {endLocation && (
                        <Marker
                            coordinate={endLocation}
                            title={"End Location"}
                        />
                    )}
                </MapView>
                <View style={styles.locationButtons}>
                    <TouchableOpacity onPress={() => setSelectingLocationFor('start')} style={styles.mapButton}>
                        <Text>Select Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectingLocationFor('end')} style={styles.mapButton}>
                        <Text>Select End</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.label}>Schedule</Text>
            <View style={styles.dateRow}>
                {/* <DatePicker
                    style={styles.datePicker}
                    date={startDate}
                    mode="date"
                    format="YYYY-MM-DD"
                    onDateChange={(date) => setStartDate(date)}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                /> */}

                <RNDateTimePicker 
                    mode="date"
                    format="YYYY-MM-DD"
                    
                />

                {/* <DatePicker
                    style={styles.datePicker}
                    date={endDate}
                    mode="date"
                    format="YYYY-MM-DD"
                    onDateChange={(date) => setEndDate(date)}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                /> */}
            </View>


            <Text style={styles.label}>Participants</Text>
            <View style={styles.participantContainer}>
                <TextInput
                    style={styles.participantInput}
                    placeholder="Limit"
                    onChangeText={setParticipantLimit}
                    value={participantLimit}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.participantInput}
                    placeholder="Entry Fee"
                    onChangeText={setEntryFee}
                    value={entryFee}
                    keyboardType="numeric"
                />
            </View>

            <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
                <Text style={styles.uploadButtonText}>Upload a cover image!</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.image} />}

            <Text style={styles.label}>Event Info</Text>
            <TextInput
                style={styles.descriptionInput}
                placeholder="The event is about..."
                onChangeText={setChallengeDescription}
                value={challengeDescription}
                multiline
            />

            <TouchableOpacity style={styles.createButton} onPress={handleCreateEvent}>
                <Text style={styles.createButtonText}>Let's get it!</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    mapContainer: {
        height: 300,
        marginBottom: 15,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    locationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    mapButton: {
        backgroundColor: '#e6ffe6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 30,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#e6ffe6',
    },
    datePicker: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#e6ffe6',
        textAlign: 'center',
        marginHorizontal: 5,
        marginBottom: 15,
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    participantContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    participantInput: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#e6ffe6',
        textAlign: 'center',
        marginHorizontal: 5,
        marginBottom: 15,
    },
    uploadButton: {
        backgroundColor: '#e6ffe6',
        borderRadius: 5,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    uploadButtonText: {
        color: '#333',
    },
    descriptionInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#e6ffe6',
        textAlignVertical: 'top',
    },
    createButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    createButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
