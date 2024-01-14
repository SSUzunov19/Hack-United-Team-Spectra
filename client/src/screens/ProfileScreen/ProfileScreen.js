import React, { useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { ProfileSection } from './components/ProfileSection';
import { BalanceSection } from './components/BalanceSection';
import { HistorySection } from './components/HistorySection';

const { width } = Dimensions.get('window');

export function ProfileScreen({ navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef();

    const sections = [
        { key: 'Balance', content: <BalanceSection /> },
        { key: 'History', content: <HistorySection /> },
    ];

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });

    const renderItem = ({ item }) => {
        return (
            <View style={{ width }}>
                {item.content}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ProfileSection navigation={navigation} />

            <View style={styles.pagination}>
                {sections.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: activeIndex === index ? 'black' : 'lightgray' }
                        ]}
                        onPress={() => {
                            flatListRef.current.scrollToIndex({ index, animated: true });
                        }}
                    />
                ))}
            </View>

            <FlatList
                ref={flatListRef}
                data={sections}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingBottom: 16,
    },
    sliderContainer: {
        flexDirection: 'row',
    },
    sliderPage: {
        width: width,
    },
    pagination: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 8,
    },
});
