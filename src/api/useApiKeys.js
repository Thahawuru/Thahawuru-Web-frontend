import axios from "axios";
import apiClient from "./apiClient";
import Toast from "@/components/utils/toaster";

export const useApiKeys = () => {
  const createApiKey = async (data) => {
    console.log('useapiKeys',data);
    try {
      const response = await apiClient.post(`/apikey/generate`, {
        name: data.fullName,
        type: data.type,
        selection: data.selection,
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

  //admin, maintainer
  const getAllApiRequests = async () => {
    try{
      const response = await apiClient.get(`/admin/Api/all`);
      return response;
    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };

  //admin, maintainer
  const acceptApiRequests = async (apiId) => {
    try{
      const response = await apiClient.get(`/admin/Api/accept/${apiId}`);
      return response;

    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };

  //admin , maintainer
  const rejectApiRequests = async (apiId) => {
    try{
      const response = await apiClient.get(`/admin/Api/declined/${apiId}`);
      return response;

    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };

  //developer
  const getAllPendingApiRequests = async () => {
    try{
      const response = await apiClient.get(`/developer/Api/pending`);
      return response;

    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };

  //admin
  const getAdminPendingApiRequests = async () => {
    try{
      const response = await apiClient.get(`/admin/Api/pending`);
      return response;

    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };

  const payForApi = async (apiId) => {
    try{
      const response = await apiClient.get(`/developer/Api/active/${apiId}`);
      return response;

    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };

  const activeApi = async () => {
    try{
      const response = await apiClient.get(`/admin/Api/active`);
      return response;

    }catch (error){
      throw new Error(error.response.data.error.message);
    }
  };


  return {
    createApiKey,
    getApiKeys,
    getAllApiRequests,
    acceptApiRequests,
    rejectApiRequests,
    getAllPendingApiRequests,
    getAdminPendingApiRequests,
    payForApi,
    activeApi
  };
};
