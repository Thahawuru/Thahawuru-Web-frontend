import axios from "axios";

const API_URL = "http://localhost:9000/api/v1";

export const useAuthentication = () => {
  const signup = async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/auth/register`,
        data: {
          email: data.email,
          password: data.password,
          otp: data.otp,
          nic: data.nic,
        },
        withCredentials: true,
      });

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
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  };

  return {
    signin,
    signup,
    authorize,
  };
};
