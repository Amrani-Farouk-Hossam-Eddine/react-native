import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
function Register() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <TextInput placeholder="enter your username" style={styles.input} />
        <TextInput placeholder="enter your phone" style={styles.input} />
        <TextInput placeholder="enter password" style={styles.input} />
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>Regester</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginTop: 130,
    flex: 1,
    gap: 40,
    alignItems: "center",
  },
  KeyboardAvoidingView: {
    gap: 40,
    alignItems: "center",
  },
  input: {
    width: 351,
    height: 83.71,
    backgroundColor: "#DEECF1",
    borderRadius: 8,
    paddingLeft: 30,
  },
  TouchableOpacity: {
    width: 351,
    height: 83.7,
    backgroundColor: "#828282",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Register;
