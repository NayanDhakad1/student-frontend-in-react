import axios from "axios";

export const BASE_URL = "http://localhost:8081"; // Backend URL
export const api = axios.create({
  baseURL: BASE_URL,
});