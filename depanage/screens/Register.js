import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { userSignUp } from "../redux/slices/registerUserSlice";
function Register() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  console.log(username);
  console.log(phone);
  console.log(password);
  const dispatch = useDispatch();

  function registerSubmit() {
    const body = {
      username,
      phone,
      password,
    };
    dispatch(userSignUp(body));
  }
  return (
    <View style={styles.container}>
      <Text className="text-[40px] font-bold text-gray-600">Register</Text>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <TextInput
          placeholder="enter your username"
          style={styles.input}
          name="username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          placeholder="enter your phone"
          style={styles.input}
          name="phone"
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
        <TextInput
          placeholder="enter password"
          secureTextEntry={true}
          style={styles.input}
          name="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={registerSubmit}
      >
        <Text style={styles.text}>Regester</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginTop: 110,
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
