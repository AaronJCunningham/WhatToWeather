import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { increment, fetchWeather, fetchLocation } from "../actions";
import { connect } from "react-redux";
import {} from "react-native";

const Weather = ({
  weather,
  lat,

  fetchWeather,
  fetchLocation,
}) => {
  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    lat ? fetchWeather() : null;
  }, [lat]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        {!weather.data ? null : (
          <Text>The Sky is {weather.data.weather[0].main}</Text>
        )}
        {!weather.data ? null : (
          <Text>The Temperature is {weather.data.main.temp}</Text>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    weather: state.weather,
    lat: state.location.latitude,
    lng: state.location.longitude,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    fetchWeather: () => dispatch(fetchWeather()),
    fetchLocation: () => dispatch(fetchLocation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    alignItems: "center",
    color: "#20232a",
    textAlign: "center",
    fontSize: 80,
    fontWeight: "bold",
  },
});
