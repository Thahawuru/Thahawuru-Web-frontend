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

  const adminMaintainerSignin = async (data) => {
    console.log(data);  
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/auth/admin/login`,
        data: {
          email: data.email,
          password: data.password,
        },
        withCredentials: true,
      });
      console.log("response check");
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error?.response.data.error);
    }
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
          organizationName: data.name,
          email: data.email,
          number: data.phoneNumber,
          purpose: data.phoneNumber,
          description: data.phoneNumber,
          whatsappNumber: data.whatsappNumber,
          project: data.project,
      
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
    adminMaintainerSignin
  };
};
