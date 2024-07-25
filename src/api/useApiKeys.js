import axios from "axios";
import apiClient from "./apiClient";

export const useApiKeys = () => {
  const createApiKey = async (data) => {
    try {
      const response = await apiClient.post(`/apikey/generate`, {
        name: data.fullName,
        type: "basic",
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

  return {
    createApiKey,
    getApiKeys,
  };
};
