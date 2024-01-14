import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const Navigation = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <NavigationContainer>
            {!isAuthenticated ? <AuthNavigator /> : <AppNavigator />}
            {/* <AppNavigator />     */}
        </NavigationContainer>
    );
};

export default Navigation;