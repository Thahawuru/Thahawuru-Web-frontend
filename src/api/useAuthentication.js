import axios from "axios";
import apiClient from "./apiClient";

const API_URL = "http://localhost:9000/api/v1";

export const useAuthentication = () => {
  const signup = async (data) => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/auth/apiuser/register`,
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
    console.log(data);  
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/auth/apiuser/login`,
        data: {
          email: data.email,
          password: data.password,
        },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      throw new Error(error?.response.data.error);
    }
  };

  const savedetails = async (data) => {
    console.log(data);  
    try {
      const response = await apiClient.post("/apiuser/savedetails",{   
          name: data.name,
          organizationName: data.organization,
          number: data.phoneNumber,
          description: data.description,      
      });
      return response;
    } catch (error) {
      throw new Error(error?.response.data.error);
    }
  };

  return {
    signin,
    signup,
    savedetails,
    authorize,
  };
};
