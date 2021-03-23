import axios from "axios";
const API_KEY = "cf46012ab2c09f0441384cc2ff9e508c";

export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=25&lon=43&APPID=${API_KEY}&units=metric`,
});
