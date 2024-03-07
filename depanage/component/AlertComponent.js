import React, { useState, useEffect } from "react";
import {
  Button,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AlertComponent = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    setLoading(true);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission Required",
          message:
            "This app needs to access your location to provide you with relevant information.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location permission granted");
        // You can navigate or perform any other action here after permission granted
      } else {
        console.log("Location permission denied");
        // You can handle the denial of permission here
      }
    } catch (err) {
      console.warn(err);
      // Handle error during permission request
    } finally {
      setLoading(false);
    }
  };

  const showAlert = () => {
    navigation.navigate("AlertScreen"); // Replace 'AlertScreen' with the screen name where you want to show the alert
  };

  return (
    <>
      <Button title="Check Location" onPress={showAlert} disabled={loading} />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
    </>
  );
};

export default AlertComponent;
