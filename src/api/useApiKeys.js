import axios from "axios";
import apiClient from "./apiClient";
import Toast from "@/components/utils/toaster";

export const useApiKeys = () => {
  const createApiKey = async (data) => {
    try {
      const response = await apiClient.post(`/apikey/generate`, {
        name: data.fullName,
        type: data.category,
        purpose:data.purpose,
        applicationDescription:data.applicationDescription,
      });
      return response;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  };
  const getApiKeys = async (data) => {
    try {
      const response = await apiClient.get(`/apikey/`);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  };

  const getAllApiRequests = async () => {
    try{
      const response = await apiClient.get(`/admin/Api/all`);
      return response;
    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };

  const acceptApiRequests = async (apiId) => {
    try{
      const response = await apiClient.get(`/admin/Api/accept/${apiId}`);
      return response;

    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };

  const rejectApiRequests = async (apiId) => {
    try{
      const response = await apiClient.get(`/admin/Api/declined/${apiId}`);
      return response;

    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  }


  return {
    createApiKey,
    getApiKeys,
    getAllApiRequests,
    acceptApiRequests,
    rejectApiRequests
  };
};
