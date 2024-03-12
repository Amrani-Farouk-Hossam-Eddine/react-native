import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {ArrowLeftIcon} from "react-native-heroicons/outline"
export default function CoursesHistory() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.arrow}><ArrowLeftIcon size={30} strokeWidth={2} color={"black"}/></View>
        <Text style={styles.title}>Courses History</Text>
      </View>
      <View style={styles.Info}>
        <View style={styles.Date}>
          <View style={styles.line}></View>
          <View style={styles.date}>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>05/02/2024</Text>
          </View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.content}>
          <View style={styles.firstchiled}>
            <View style={styles.time}>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>12:40</Text>
              <Text style={{ fontSize: 20 }}>XXXYYY</Text>
            </View>
            <Text style={{ fontSize: 20 }}>130 DZ</Text>
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
        </View>
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
    backgroundColor: "#DEECF1",
    gap: 20,
    paddingLeft: 20,
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
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  firstchiled: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "black",
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
