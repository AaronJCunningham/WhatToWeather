import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { increment, fetchWeather, fetchLocation } from "../actions";
import { connect } from "react-redux";
import {} from "react-native";

const Counter = ({
  count,
  weather,
  lat,
  lng,
  increment,
  fetchWeather,
  fetchLocation,
}) => {
  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>This is the Counter {count}</Text>
        <TouchableOpacity onPress={increment}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchWeather}>
          <Text>fetchPosts</Text>
        </TouchableOpacity>
        {!weather.data ? null : <Text>{weather.data.weather[0].main}</Text>}
        <TouchableOpacity onPress={fetchLocation}>
          <Text>fetchLocation</Text>
        </TouchableOpacity>
        <Text>Latitude {lat}</Text>
        <Text>longtitude {lng}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
