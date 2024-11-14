import axios from "axios";

const bookInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL || "https://ibst-book-app-back-end.onrender.com/api" 
});

export default bookInstance;
