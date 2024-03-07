import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Driver = ({ driver }) => {
  const handleDemand = () => {
    // Logic for demanding
  };

  const handleCall = () => {
    // Logic for calling
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-row justify-around p-4 items-center border-b border-gray-300 w-[90%] bg-[#DEECF1] rounded-lg my-2 mx-auto">
      <Image
        source={{ uri: driver.image }}
        className="w-20 h-20 rounded-full mr-4"
      />
      <View className="-mt-6">
        <View className="flex-1 gap-1">
          <Text className="font-bold text-lg">{driver.name}</Text>
          <Text className="text-gray-500 mb-2">{driver.currentCity}</Text>
          <Text className="mb-2">{driver.phone}</Text>
        </View>
        <View className="flex-row">
          <TouchableOpacity
            //onPress={handleDemand}
            onPressIn={() => navigation.navigate("Map")}
            className="bg-blue-500 px-4 py-2 rounded mr-2"
          >
            <Text className="text-white">Demand</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCall}
            className="bg-green-500 px-4 py-2 rounded"
          >
            <Text className="text-white">Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Driver;
