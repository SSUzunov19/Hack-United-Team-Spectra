import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from '../screens/SearchScreen';
import { OverviewMapScreen } from '../screens/OverviewMapScreen';
import { MainMapScreen } from '../screens/MainMapScreen';
import { EventDetailsScreen } from '../screens/EventDetailsScreen';
import { ChallengeScreen } from '../screens/ChallengeScreen';

const SearchStack = createStackNavigator();

export const SearchStackNavigator = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="Search"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <SearchStack.Screen
                name="Challenge"
                component={ChallengeScreen}
                options={{ headerShown: false }}
            />
            <SearchStack.Screen
                name="OverviewMap"
                component={OverviewMapScreen}
                options={{ headerShown: false }}
            />
            <SearchStack.Screen
                name="EventDetails"
                component={EventDetailsScreen}
                options={{ headerShown: false }}
            />
            <SearchStack.Screen
                name="MainMap"
                component={MainMapScreen}
                options={{ headerShown: false }}
            />
        </SearchStack.Navigator>
    );
};