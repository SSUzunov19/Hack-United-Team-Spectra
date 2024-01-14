import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import Navigation from './src/navigation';
import ServiceContext, { services } from './src/services/ServiceContext';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'NeueMontreal-Regular': require('./src/assets/fonts/NeueMontreal-Regular.ttf'),
          'NeueMontreal-Medium': require('./src/assets/fonts/NeueMontreal-Medium.ttf'),
        });
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ServiceContext.Provider value={services}>
        <Navigation />
        <StatusBar style="auto" />
      </ServiceContext.Provider>
    </>
  );
}
