import axios from "axios";
const API_KEY = "yourkeyhere";

export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=25&lon=43&APPID=${API_KEY}&units=metric`,
});
