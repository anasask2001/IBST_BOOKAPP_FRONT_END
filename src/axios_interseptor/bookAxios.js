import axios from "axios";

const bookInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3002/api" 
});

export default bookInstance;
