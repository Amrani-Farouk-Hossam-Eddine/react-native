import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const ServicesScreen = () => {
  const user = {
    name: "John Doe",
    location: "New York, NY",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  };
  const navigation = useNavigation();
  return (
    <View className="flex-1 py-4">
      <SafeAreaView className="flex">
        <ScrollView>
          {/* First Section: User Image and Location */}
          <View className="bg-[#DEECF1] p-4 w-[95%] mx-auto rounded-lg my-5">
            <View className="flex-row items-center justify-around">
              <TouchableOpacity
                onPress={() => navigation.navigate("UserProfile")}
              >
                <Image
                  source={{ uri: user.profilePicture }}
                  className="w-12 h-12 rounded-full p-2"
                />
              </TouchableOpacity>
              <View>
                <Text className="text-md font-bold text-center">
                  {user.name}
                </Text>
                <Text className="text-lg font-bold text-center">
                  {user.location}
                </Text>
              </View>
            </View>
          </View>

          <View className="p-4 w-[95%] mx-auto rounded-lg my-5">
            <View className="flex-row justify-around gap-3 w-full">
              <TouchableOpacity onPress={() => navigation.navigate("Coursat")}>
                <View className=" bg-[#DEECF1] w-24 h-24 flex items-center justify-center rounded-lg">
                  <Text className="text-lg text-center font-semibold">
                    Orders
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("CoursesHistory")}
              >
                <View className="w-24 bg-[#DEECF1] h-24 flex items-center justify-center rounded-lg">
                  <Text className="text-lg text-center font-semibold">
                    History
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Third Section: Services */}
          <View className=" p-4 w-[95%] mx-auto rounded-lg my-5">
            <View className="flex-row justify-between gap-3 w-full">
              <TouchableOpacity
                onPress={() => navigation.navigate("Drivers")}
                className="w-full"
              >
                <View className=" bg-[#DEECF1] w-full h-16 flex items-center justify-center rounded-lg">
                  <Text className="text-lg text-center font-semibold">
                    Click to end working
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Fourth Section: Ads */}
          <View className="bg-[#DEECF1] p-4 w-[95%] mx-auto rounded-lg my-5">
            <Text className="text-lg font-bold mb-7">Our Offers</Text>
            <View className="w-[95%] bg-white h-52 flex items-center justify-center rounded-lg">
              <Text className="text-3xl font-semibold">Adds</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ServicesScreen;
