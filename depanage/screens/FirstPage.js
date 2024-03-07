import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
function FirstPage({ navigation }) {
  return (
    <View style={styles.constainer}>
      <View style={styles.viewImage}>
        <Text style={styles.appName}>Depanage DZ</Text>

        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/Logo.png")}
        />
      </View>
      <Text style={styles.order}>Order tow trauck</Text>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          navigation.navigate("SecondePage");
        }}
      >
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
    gap: 50,
  },
  viewImage: {
    backgroundColor: "#DEECF1",
    width: "100%",
    height: 423,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 170,
    borderBottomLeftRadius: 170,
  },
  appName: {
    fontSize: 35,
    fontWeight: "500",
  },
  image: {
    width: 300,
    height: 200,
  },
  order: {
    fontSize: 40,
  },
  TouchableOpacity: {
    width: 351,
    height: 83.7,
    backgroundColor: "#DEECF1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 30,
    color: "gray",
  },
});

export default FirstPage;
