import axios from "axios";
import apiClient from "./apiClient";
import { useRouter } from "next/navigation";

const API_URL = "http://localhost:9000/api/v1";

export const useAuthentication = () => {
  const router = useRouter();
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

  const logout = async () => {
    try {
      // const response = await axios.post("/auth/logout");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      router.push("/");
      // return response;
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
    adminMaintainerSignin,
    logout,
  };
};
