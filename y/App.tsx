/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import MorningIntro from "./screens/MorningIntro";
import Morning from "./screens/Morning";
import Evening from "./screens/Evening";
import HabitTracker from "./screens/HabitTracker";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import GoogleSignInButton from './GoogleSignInButton';
import './GoogleSignInConfig'; // Ensures Google Sign-In is configured
// import LoginWelcomePage from "./LoginWelcomePage";
// import Homepage from "./Homepage";
const App: React.FC = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  return (
    // <View>
    //   <GoogleSignInButton />
    // </View>
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MorningIntro"
              component={MorningIntro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Morning"
              component={Morning}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Evening"
              component={Evening}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HabitTracker"
              component={HabitTracker}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
}

export default App;