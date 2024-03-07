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

const HomeScreen = () => {
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
        <View className="flex-[2] bg-[#DEECF1]">
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
        <View className="flex-1 gap-3 p-4 bg-white">
          <Text className="text-lg font-bold mb-2">
            Where do you want to go?
          </Text>
          <TextInput
            className="border border-gray-300 px-4 py-2 mb-4 rounded-lg"
            value={destination}
            onChangeText={setDestination}
            placeholder="Enter destination address"
          />
          <TouchableOpacity>
            <View
              className="bg-gray-500 py-3 items-center justify-center rounded-lg"
              onPress={handleUseCurrentLocation}
            >
              <Text className="text-white">Use My Current Location</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              className="bg-gray-500 py-3 items-center justify-center rounded-lg"
              onPress={handleUseCurrentLocation}
            >
              <Text className="text-white">Choose on the map</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
