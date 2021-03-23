import React from "react";
import { API_KEY } from "./ApiKey";

export const fetchWeather = (lat = 25, lon = 25) => {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
  };

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
        isLoading: false,
      });
    });
};
