import axios from "axios";

export const AuthAxios = axios.create({
  baseURL: `${process.env.REACT_APP_ENDPOINT}`,
});
// https://docs.google.com/forms/d/e/1FAIpQLSd-ksHmqVdjx0G_HmDCdQx8sYqr6PpY3if8fLDg9XcPhhCJ8g/formResponse
