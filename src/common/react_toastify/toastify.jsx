import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const successToastify = (message) => {
  return (
    message &&
    toast.success(message.toUpperCase(), {
      position: "bottom-center",
      hideProgressBar: true,
      transition: Flip,
      autoClose: 2000,
    })
  );
};

export const errorToastify = (message) => {
  return (
    message &&
    toast.error(message.toUpperCase(), {
      position: "bottom-center",
      hideProgressBar: true,
      transition: Flip,
      autoClose: 4000,
    })
  );
};

export const infoToastify = (message) => {
  return (
    message &&
    toast.info(message.toUpperCase(), {
      position: "bottom-center",
      hideProgressBar: true,
      transition: Flip,
      autoClose: 4000,
    })
  );
};
