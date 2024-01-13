import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StatisticsScreen } from '../screens/StatisticsScreen';

const StatisticsStack = createStackNavigator();

export const StatisticsStackNavigator = () => {
    return (
        <StatisticsStack.Navigator>
            <StatisticsStack.Screen
                name="Statistics"
                component={StatisticsScreen}
                options={{ headerShown: false }}
            />
        </StatisticsStack.Navigator>
    );
};