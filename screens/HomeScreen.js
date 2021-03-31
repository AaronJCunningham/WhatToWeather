import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

import Weather from "../components/Weather";
import ClothingDisplay from "../components/ClothingDisplay";
import DateDisplay from "../components/DateDisplay";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.weatherContainer}>
      <DateDisplay />
      <Weather />
      <ClothingDisplay />
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      >
        <Text>Later</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    alignItems: "center",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
