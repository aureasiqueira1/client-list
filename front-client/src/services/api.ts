import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:3001/cliente",
  baseURL: "https://api-client.vercel.app/cliente",
});
