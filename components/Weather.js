import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { fetchWeather, fetchLocation } from "../actions";

const Weather = ({ weather, lat, fetchWeather, fetchLocation }) => {
  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    lat ? fetchWeather() : null;
  }, [lat]);

  return (
    <View style={styles.weatherContainer}>
      <View>
        {!weather.data ? null : (
          <Text style={styles.title}>
            The Sky is {weather.data.list[0].weather[0].main}
          </Text>
        )}
        {!weather.data ? null : (
          <Text style={styles.title}>
            The Temperature: {weather.data.list[0].main.temp}
          </Text>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    lat: state.location.latitude,
    lng: state.location.longitude,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: () => dispatch(fetchWeather()),
    fetchLocation: () => dispatch(fetchLocation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

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
    fontSize: 24,
    fontWeight: "bold",
  },
});
