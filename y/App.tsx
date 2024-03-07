/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
const Stack = createNativeStackNavigator();

import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

// import GoogleSignInButton from './GoogleSignInButton';
// import './GoogleSignInConfig'; // Ensures Google Sign-In is configured
import LoginWelcomePage from "./LoginWelcomePage";
import Homepage from "./Homepage";
const App: React.FC = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  return (
    <>
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="LoginWelcomePage"
            component={LoginWelcomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  </>
  );
}

export default App;