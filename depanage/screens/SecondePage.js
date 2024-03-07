import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
function SecondePage({ navigation }) {
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
      <Text style={styles.order}>do you want to register as:</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[{ backgroundColor: "#828282" }, styles.TouchableOpacity]}>
          <Text style={styles.text}>Driver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{ backgroundColor: "#33393C" }, styles.TouchableOpacity]}
          onPress={() => {
            navigation.navigate("Login");
          }}>
          <Text style={styles.text}>Clien</Text>
        </TouchableOpacity>
      </View>
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
    textAlign: "center",
    },
    buttons: {
        flexDirection: "row",
        gap:50,
  },
  TouchableOpacity: {
    width: 120,
    height: 60,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default SecondePage;
