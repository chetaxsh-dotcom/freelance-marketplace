import axios from "axios";

const API = axios.create({
  baseURL: "https://freelance-marketplace-v14f.onrender.com/api"
});

export default API;