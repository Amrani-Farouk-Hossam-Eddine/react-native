import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import DriversScreen from "./screens/DriversScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import ServicesScreen from "./screens/ServicesScreen";
import FirstPage from "./screens/FirstPage";
import SecondePage from "./screens/SecondePage";
import Login from "./screens/Login";
import Register from "./screens/Register";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Drivers" component={DriversScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondePage" component={SecondePage} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
