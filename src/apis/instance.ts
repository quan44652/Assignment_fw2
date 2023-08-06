/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { message } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
const token = localStorage.getItem("token");

const headers: { Authorization?: string } = {};

try {
  headers.Authorization = `Bearer ${JSON.parse(token!)}`;
} catch (error) {
  toast.error("Bạn chưa đăng nhập");
  window.location.href = "/signin";
}

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers,
});

export default instance;