import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const ProfileStack = createStackNavigator();

export const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    );
};