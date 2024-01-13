import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsNavigator from './TabsNavigator';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="App"
                component={TabsNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;