import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronRightIcon,
  UserCircleIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  UsersIcon,
  ArrowLeftStartOnRectangleIcon,
} from "react-native-heroicons/outline";

const UserProfileScreen = () => {
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    language: "English",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  };
  const handleDemand = () => {
    // Handle demand action
  };

  const handleCall = () => {
    // Handle call action
  };
  const handleReferFriend = () => {
    // Handle call action
  };
  const handleLogout = () => {
    // Handle call action
  };

  return (
    <SafeAreaView className="flex-1 bg-white py-5">
      {/* First Section */}
      <View className="flex-row justify-between items-center p-4">
        <View className="flex-1 items-center">
          <Image
            source={{ uri: userData.profilePicture }} // Assuming you have a user's image URI
            className="w-20 h-20 rounded-full"
          />
          <Text className="font-bold text-lg mt-2">{userData.name}</Text>
        </View>
        <View />
      </View>

      {/* Second Section */}
      <View className="p-4 border-b border-gray-300 bg-[#DEECF1] w-[90%] mx-auto rounded-lg my-16">
        <Text className="font-bold text-lg mb-5">My Account :</Text>
        <View className="flex gap-5">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-3">
              <UserCircleIcon size="30" strokeWidth={2} color="gray" />
              <Text className="text-lg">Personal info</Text>
            </View>
            <View>
              <ChevronRightIcon size="30" strokeWidth={2} color="gray" />
            </View>
          </View>
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-3">
              <ArrowPathIcon size="30" strokeWidth={2} color="gray" />
              <Text className="text-lg">History</Text>
            </View>
            <View>
              <ChevronRightIcon size="30" strokeWidth={2} color="gray" />
            </View>
          </View>
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-3">
              <UsersIcon size="30" strokeWidth={2} color="gray" />
              <Text className="text-lg">Refer a friend</Text>
            </View>
            <View>
              <ChevronRightIcon size="30" strokeWidth={2} color="gray" />
            </View>
          </View>
        </View>
      </View>

      {/* Third Section */}
      <View className="p-4 border-b border-gray-300 bg-[#DEECF1] w-[90%] mx-auto rounded-lg">
        <Text className="font-bold text-lg mb-5">Others :</Text>
        <View className="flex gap-5">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-3">
              <GlobeAltIcon size="30" strokeWidth={2} color="gray" />
              <Text className="text-lg">Language</Text>
            </View>
            <View>
              <ChevronRightIcon size="30" strokeWidth={2} color="gray" />
            </View>
          </View>
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-3">
              <ArrowLeftStartOnRectangleIcon
                size="30"
                strokeWidth={2}
                color="gray"
              />
              <Text className="text-lg">Logout</Text>
            </View>
            <View>
              <ChevronRightIcon size="30" strokeWidth={2} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
