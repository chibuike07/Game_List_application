import axios from "axios";
import { errorToastify } from "../common/react_toastify/toastify";

import { switchData } from "./switchData";

export const fetchRequest = async ({ url, storage, dispatch }) => {
  await axios
    .get(url, {
      "Content-Type": "application/json",
    })
    .then((res) => {
      console.log(`res.data`, res.data);
      res.data && switchData({ storage, dispatch, payload: res.data });
    })
    .catch((err) => {
      return err.toString().trim().includes("network")
        ? errorToastify("Network error. try again later")
        : err.response === undefined
        ? false
        : errorToastify("No data is available.");
    });
};
