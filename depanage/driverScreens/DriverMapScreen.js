import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [destination, setDestination] = useState("");

  const handleUseCurrentLocation = () => {
    // Logic to get current location and update the map region
  };

  const handleChooseOnMap = () => {
    // Logic to open map picker and choose destination
  };
  return (
    <SafeAreaView className="h-full flex-1">
      <View className="flex-1">
        <View className="h-[60%] bg-[#DEECF1] mb-10">
          <View className="flex-1 items-center justify-center" region={region}>
            {/* <Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
              title="You are here"
              description="Your current location"
            /> */}
            <Text className="text-2xl">Map</Text>
          </View>
        </View>
        <View className="p-4 bg-gray-300 w-[95%] mx-auto rounded-lg my-5">
          <View className="flex-row justify-around gap-3 w-full mb-5">
            <TouchableOpacity onPress={() => navigation.navigate("Drivers")}>
              <View className=" bg-blue-700 w-40 h-16 flex items-center justify-center rounded-lg">
                <Text className="text-lg text-center font-semibold text-white">
                  Use GPS
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("CourseDone")}>
              <View className="w-40 bg-green-700 h-16 flex items-center justify-center rounded-lg">
                <Text className="text-lg text-center font-semibold text-white">
                  Apply Client
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View className="w-full bg-gray-500 h-16 flex items-center justify-center rounded-lg">
              <Text className="text-lg text-center font-semibold text-white">
                Mechanic
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
