import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth`;

const coonfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const register = (body) => {
  return axios.post(`${baseUrl}/register`, body);
};

export const login = (body) => {
  return axios.post(`${baseUrl}/login`, body);
};

export const logout = () => {
  return axios.post(`${baseUrl}/logout`);
};

export const forgotPassword = (body) => {
  return axios.post(`${baseUrl}/forgot-password`, body);
};

export const resetPassword = (body) => {
  return axios.patch(`${baseUrl}/reset-password`, body);
};
