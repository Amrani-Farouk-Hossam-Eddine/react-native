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
import RegisterDriver from "./driverScreens/RegisterDriver";
import LoginDriver from "./driverScreens/LoginDriver";
import DriverService from "./driverScreens/DriverService";
import DriverServiceInof from "./driverScreens/DriverServiceInfo";
import CoursesHistory from "./driverScreens/CoursesHistory";
import Coursat from "./driverScreens/Coursat";
import DriverProfileScreen from "./driverScreens/DriverProfileScreen";
import DriverMapScreen from "./driverScreens/DriverMapScreen";
import CourseDone from "./driverScreens/CourseDone";

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
        <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
        <Stack.Screen name="LoginDriver" component={LoginDriver} />
        <Stack.Screen name="DriverService" component={DriverService} />
        <Stack.Screen name="DriverServiceInfo" component={DriverServiceInof} />
        <Stack.Screen name="CoursesHistory" component={CoursesHistory} />
        <Stack.Screen name="Coursat" component={Coursat} />
        <Stack.Screen name="DriverProfile" component={DriverProfileScreen} />
        <Stack.Screen name="DriverMap" component={DriverMapScreen} />
        <Stack.Screen name="CourseDone" component={CourseDone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
