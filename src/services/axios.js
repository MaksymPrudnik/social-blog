import axios from "axios";
import { serverConfig } from "../config";

const instance = axios.create({
  baseURL: serverConfig.host,
});

export const makeGetRequest = ({ url }) =>
  instance({
    url,
    method: "GET",
  })
    .then(({ data, status }) => (status === 200 ? data : null))
    .catch(({ message }) => {
      throw new Error(message);
    });

export const makePostRequest = ({ url, data }) =>
  instance({
    url,
    method: "POST",
    data,
  })
    .then(({ data, status }) => (status === 200 ? data : null))
    .catch(({ message }) => {
      throw new Error(message);
    });

export const makeLoginRequest = ({ token }) =>
  instance({
    url: "/auth",
    method: "POST",
    headers: {
      Authorization: `Basic ${token}`,
    },
  })
    .then(({ data, status }) => (status === 201 ? data : null))
    .catch(({ message }) => {
      throw new Error(message);
    });

export const makeRegisterRequest = ({ data }) =>
  instance({
    url: "/users",
    method: "POST",
    data,
  })
    .then(({ data, status }) => (status === 201 ? data : null))
    .catch(({ message }) => {
      throw new Error(message);
    });

export const makeGetMeRequest = ({ token }) =>
  instance({
    url: "/users/me",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data, status }) => (status === 200 ? data : null))
    .catch(({ message }) => {
      throw new Error(message);
    });
