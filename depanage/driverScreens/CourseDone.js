import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ArrowLeftIcon, CheckIcon } from "react-native-heroicons/outline";

export default function CoursesHistory() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View className="w-16 h-16 bg-green-400 justify-center items-center rounded-full">
          <CheckIcon size="35" strokeWidth={2} color="white" />
        </View>
      </View>
      <View style={styles.Info}>
        <View style={styles.content}>
          <View style={styles.firstchiled}>
            <View style={styles.time}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>Price:</Text>
              <Text style={{ fontSize: 20 }}>Taxes:</Text>
            </View>
            <View style={styles.time}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>230 DZ</Text>
              <Text style={{ fontSize: 20 }}>30 DZ</Text>
            </View>
          </View>
          <View className="h-[0.75] w-[90%] bg-black mx-auto" />
          <View style={styles.firstchiled}>
            <View style={styles.time}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                Net Profit:
              </Text>
            </View>
            <View style={styles.time}>
              <Text style={{ fontSize: 20 }}>200 DZ</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="mx-auto bg-green-400 px-16 py-4 rounded-lg">
        <Text className="text-white text-xl font-bold">Cash in</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 60,
  },
  header: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingLeft: 20,
    marginTop: 120,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "400",
  },
  arrow: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
  },
  Info: {
    width: "100%",
    alignItems: "center",
    minHeight: 221,

    paddingVertical: 20,
    gap: 20,
  },

  Date: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "black",
  },
  date: {
    borderWidth: 2,
    borderColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  content: {
    width: "95%",
    minHeight: 174,
    backgroundColor: "#DEECF1",
    borderRadius: 15,
  },
  firstchiled: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  places: {
    padding: 20,
    gap: 10,
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
  },
});
