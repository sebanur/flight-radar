import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "3f3049304dmsh33dc59fececa4fbp15ff70jsna61b1e16a35",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

export default api;
