import axios from "axios";
import { serverConfig } from "../config";

const instance = axios.create({
  baseURL: serverConfig.host,
});

export const makeGetRequest = ({ url, token }) => {
  const options = {
    url,
    method: "GET",
  };
  if (token) {
    options.headers = { Authorization: `Bearer ${token}` };
  }
  return instance(options)
    .then(({ data, status }) => (status === 200 ? data : null))
    .catch(({ message }) => {
      throw new Error(message);
    });
};

export const makePostRequest = ({ url, data }) => {
  const token = localStorage.getItem("accessToken");
  const options = {
    url,
    method: "POST",
    data,
    headers: { Authorization: `Bearer ${token}` },
  };
  return instance(options)
    .then(({ data, status }) =>
      [200, 201].includes(status) ? data || true : null
    )
    .catch(({ message }) => {
      throw new Error(message);
    });
};

export const makePutRequest = ({ url, data }) => {
  const token = localStorage.getItem("accessToken");
  const options = {
    url,
    method: "PUT",
    data,
    headers: { Authorization: `Bearer ${token}` },
  };
  return instance(options)
    .then(({ data, status }) =>
      [200, 201].includes(status) ? data || true : null
    )
    .catch(({ message }) => {
      throw new Error(message);
    });
};

export const makeDeleteRequest = ({ url }) => {
  const token = localStorage.getItem("accessToken");
  const options = {
    url,
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  };
  return instance(options)
    .then(({ status }) => (status === 204 ? true : null))
    .catch(({ message }) => {
      throw new Error(message);
    });
};

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
