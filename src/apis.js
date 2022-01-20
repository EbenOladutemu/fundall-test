/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  instance.defaults.headers.common['Accept'] = 'application/json';
  instance.defaults.headers.common['Content-Type'] = 'application/json';
}

const login = ({ email, password }) => {
  return instance.post(`/auth/login`, { email, password });
}

const getListings = () => {
  return instance.get(`/listings`);
}

const makeReservation = ({
  firstName,
  lastName,
  email,
  password,
  password_confirmation
}) => {
  return instance.post(`/api/v1/register`, {
    firstName,
    lastName,
    email,
    password,
    password_confirmation
  })
}

export default {
  setToken,
  login,
  getListings,
  makeReservation,
};
