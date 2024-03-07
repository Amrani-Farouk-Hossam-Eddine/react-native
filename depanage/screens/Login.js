import React from "react";
import {
  Animated,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <TextInput placeholder="enter your username" style={styles.input} />
        <TextInput placeholder="enter your phone" style={styles.input} />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          navigation.navigate("Services");
        }}
      >
        <Text style={styles.text}>login</Text>
      </TouchableOpacity>
      <View style={styles.lines}>
        <View style={styles.line}></View>
        <Text style={{ color: "#909090", fontSize: 15, lineHeight: 15 }}>
          or
        </Text>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    gap: 40,
    alignItems: "center",
    marginTop: 100,
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
  lines: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    gap: 5,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#909090",
  },
});

export default Login;
