import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  XMarkIcon,
  CheckIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
export default function Coursat() {
  const user = {
    name: "John Doe",
    location: "New York, NY",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.arrow}>
          <ArrowLeftIcon size={30} strokeWidth={2} color={"black"} />
        </View>
      </View>
      <View style={styles.customer}>
        <View style={styles.customerInfo}>
          <Image
            resizeMode="contain"
            source={{ uri: user.profilePicture }}
            style={styles.customerImage}
          />
          <Text style={{ fontSize: 20 }}>Customer name</Text>
        </View>
        <Text style={{ fontSize: 20 }}>230 DZ</Text>
      </View>
      <View style={styles.places}>
        <View style={styles.place}>
          <View style={styles.dot}></View>
          <Text style={{ fontSize: 20 }}>Oude Ltork</Text>
        </View>
        <View style={styles.place}>
          <View style={styles.dot}></View>
          <Text style={{ fontSize: 20 }}>Loude</Text>
        </View>
      </View>
      <View style={styles.decision}>
        <View style={styles.box}>
          <XMarkIcon size={40} strokeWidth={3} color={"red"} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("DriverMap")}>
          <View style={styles.box}>
            <CheckIcon size={40} strokeWidth={3} color={"#2BD48D"} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    paddingLeft: 20,
  },
  arrow: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
  },
  customer: {
    width: "90%",
    height: 138,
    backgroundColor: "#DEECF1",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  customerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  customerImage: {
    width: 79,
    height: 79,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#D9D9D9",
  },
  places: {
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#DEECF1",
    padding: 20,
    gap: 20,
  },
  place: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dot: {
    width: 11,
    height: 11,
    backgroundColor: "#C15A10",
    borderRadius: 50,
    borderRadius: 20,
  },
  decision: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    minheight: 70,
    backgroundColor: "#DEECF1",
    position: "absolute",
    bottom: 50,
    padding: 6,
    borderRadius: 50,
  },
  box: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
