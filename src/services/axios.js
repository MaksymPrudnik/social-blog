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
