import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { handleClothing } from "../utils/handleClothing";

const ClothingDisplay = ({ weather }) => {
  return (
    <View style={styles.weatherContainer}>
      {!weather.data ? null : (
        <Text style={styles.title}>
          {handleClothing(weather.data.list[0].main.temp)}
        </Text>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(ClothingDisplay);

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
