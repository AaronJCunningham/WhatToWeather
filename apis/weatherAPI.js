import axios from "axios";
// const API_KEY = "";
import store from "../App";

export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=55&lon=24&APPID=cf46012ab2c09f0441384cc2ff9e508c&units=metric`,
});
