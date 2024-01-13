import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreen } from '../screens/SettingsScreen';

const SettingsStack = createStackNavigator();

export const SettingsStackNavigator = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </SettingsStack.Navigator>
    );
};