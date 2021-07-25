import { errorToastify } from "../common/react_toastify/toastify";
import { AuthAxios } from "./CustomAxios";

import { switchData } from "./switchData";

export const fetchRequest = async ({ url, storage, dispatch }) => {
  await AuthAxios.get(url, {
    "Content-Type": "application/json",
    withCredentials: true,
  })
    .then((res) => {
      res.data && switchData({ storage, dispatch, payload: res.data });
    })
    .catch((err) => {
      return err.toString().trim().includes("network")
        ? errorToastify("Network error. try again later")
        : err.response === undefined
        ? false
        : errorToastify("No data available.");
    });
};
