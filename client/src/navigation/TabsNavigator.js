import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { HomeStackNavigator } from './HomeStackNavigator';
import { SearchStackNavigator } from './SearchStackNavigator';
import { StatisticsStackNavigator } from './StatisticsStackNavigator';
import { SettingsStackNavigator } from './SettingsStackNavigator';

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  const getTabBarIcon = (route, focused) => {
    let iconName;
    if (route.name === 'HomeStack') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'SearchStack') {
      iconName = focused ? 'search' : 'search-outline';
    } else if (route.name === 'StatisticsStack') {
      iconName = focused ? 'stats-chart' : 'stats-chart-outline';
    } else if (route.name === 'SettingsStack') {
      iconName = focused ? 'settings' : 'settings-outline';
    }

    return (
      <Ionicons
        name={iconName}
        size={28}
        color={focused ? '#58CC02' : '#c7c7c7'}
      />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => getTabBarIcon(route, focused, color),
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#00E124',
        tabBarInactiveTintColor: '#C7C7C7',
        tabBar: () => null,
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        listeners={({ navigation, route }) => ({
          focus: () => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Form') {
              navigation.setOptions({ tabBarStyle: { display: '' } });
            } else {
              navigation.setOptions({
                tabBarStyle: { ...styles.tabBar },
              });
            }
          },
        })}
      />
      <Tab.Screen name="SearchStack" component={SearchStackNavigator} />
      <Tab.Screen name="StatisticsStack" component={StatisticsStackNavigator} />
      <Tab.Screen name="SettingsStack" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    display: 'flex',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 5,
    zIndex: 1,
  },
});

export default TabsNavigator;
