import { View, Text, ScrollView } from "react-native";
import React from "react";
import Driver from "../component/Driver";

const DriversScreen = () => {
  const fakeDrivers = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      phone: "+1234567890",
      currentCity: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      phone: "+1987654321",
      currentCity: "Los Angeles",
    },
    {
      id: 3,
      name: "Michael Johnson",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      phone: "+1122334455",
      currentCity: "Chicago",
    },
    {
      id: 4,
      name: "Emily Davis",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      phone: "+1555666777",
      currentCity: "Houston",
    },
    {
      id: 5,
      name: "Chris Wilson",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      phone: "+1444333222",
      currentCity: "Phoenix",
    },
    {
      id: 5,
      name: "Chris Wilson",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      phone: "+1444333222",
      currentCity: "Phoenix",
    },
    {
      id: 5,
      name: "Chris Wilson",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      phone: "+1444333222",
      currentCity: "Phoenix",
    },
    {
      id: 5,
      name: "Chris Wilson",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      phone: "+1444333222",
      currentCity: "Phoenix",
    },
  ];
  return (
    <View className="bg-[#fff] py-6">
      <View className="px-5 pt-4 pb-7">
        <Text className="text-2xl">Truck Drivers List :</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {fakeDrivers.map((driver, index) => (
          <Driver driver={driver} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default DriversScreen;
