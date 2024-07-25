import axios from "axios";
import apiClient from "./apiClient";



export const useQr = () => {
  const getQrDetails = async (data) => {
    try {
      const response = await apiClient.get(`/qr/${data}`);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  };

  const authorize = () => {
    return {
      name: "Tharindu Ranasinghe",
      sex: "male",
      no: "N7754121",
      nationality: "SRILANKAN",
      dob: "1995-02-02",
      proffession: "Softeware Engineer",
      doi: "2021-02-02",
      doe: "2031-02-02",
      type: "PASSPORT",
    };
  };
  const signin = async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/auth/login`,
        data: {
          email: data.email,
          password: data.password,
        },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  };

  return {
    signin,
    getQrDetails,
    authorize,
  };
};
