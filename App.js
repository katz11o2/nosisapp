import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './components/Footer';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  DMSans_400Regular,
  DMSans_600SemiBold,
} from '@expo-google-fonts/dm-sans';

import ThreeScreen from './screens/Home'; // Replace with your actual screen

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ThreeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ThreeScreen" component={ThreeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

 
