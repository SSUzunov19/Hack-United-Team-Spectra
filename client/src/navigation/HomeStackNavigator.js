import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { CreateChallengeScreen } from '../screens/CreateChallengeScreen';

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            {/* <HomeStack.Screen
                name="CreateChallenge"
                component={CreateChallengeScreen}
                options={{ headerShown: false }}
            /> */}
        </HomeStack.Navigator>
    );
};