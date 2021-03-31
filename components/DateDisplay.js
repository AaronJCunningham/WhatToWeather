import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { handleDateConversion } from "../utils/handleDateConversion";

const DateDisplay = ({ weather }) => {
  return (
    <View style={styles.weatherContainer}>
      {!weather.data ? null : (
        <>
          <Text style={styles.title}>
            {handleDateConversion(weather.data.list[0].dt).toDateString()}
          </Text>
          <Text style={styles.title}>
            From:
            {" " +
              (handleDateConversion(weather.data.list[0].dt).getHours() - 2) +
              ":00 "}
            To:{" "}
            {" " +
              (handleDateConversion(weather.data.list[0].dt).getHours() + 1) +
              ":00"}
          </Text>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(DateDisplay);

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
