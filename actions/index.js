import axios from "axios";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const fetchWeather = () => {
  return async function (dispatch, getState) {
    const location = getState().location;
    const lat = Math.trunc(location.latitude) || 0;
    const lng = Math.trunc(location.longitude) || 0;
    console.log(lat);
    console.log(lng);

    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=cf46012ab2c09f0441384cc2ff9e508c&units=metric`
    );
    dispatch({ type: "FETCH_WEATHER", payload: response });
    console.log("weather " + response.data.weather[0].main);
  };
};

export const fetchLocation = () => {
  return (dispatch) => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      dispatch({
        type: "FETCH_LOCATION",
        payload: position.coords,
      });
    });
  };
};
