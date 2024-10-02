import { User } from "../types/User";
import axiosInstance from "./axiosInstance";

const AuthAPI = {
  login: async (email: string, password: string): Promise<User> => {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  },

  register: async (
    nombre: string,
    apellido: string,
    email: string,
    password: string,
  ): Promise<User> => {
    const response = await axiosInstance.post("/auth/register", {
      nombre,
      apellido,
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);

    return response.data;
  },

  logout: async (): Promise<void> => {
    axiosInstance.post("/auth/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getUser: async (): Promise<User> => {
    const response = await axiosInstance.get("/auth/user");
    return response.data;
  },
};

export default AuthAPI;
