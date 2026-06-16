import axios from "axios";

export const BASE_URL = "https://student-api-in-spring-boot-5.onrender.com"; // Backend URL
export const api = axios.create({
  baseURL: BASE_URL,
});