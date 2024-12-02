import axios from 'axios';
import Cookies from "js-cookie";

const getEmail = async () => {
  const user = Cookies.get('user');
  if (!user) {
    throw new Error("User cookie not found");
  }
  const parsedUser = JSON.parse(user);
  const email = parsedUser.email;
  if (!email) {
    throw new Error("Email not found in user cookie");
  }
  return email;
};


export const fetchTotalRequests = async () => {
  try {
    const email = await getEmail();
    const response = await axios.get(`http://localhost:3010/developer/developer-dashboard/total-requests/${email}`);
    return response.data.total_requests;
  } catch (error) {
    console.error('Error fetching total requests:', error);
    throw error;
  }
};

export const fetchTodayRequests = async () => {
  try {
    const email = await getEmail();
    const response = await axios.get(`http://localhost:3010/developer/developer-dashboard/today-requests/${email}`);
    return response.data.total_requests;
  } catch (error) {
    console.error('Error fetching today\'s requests:', error);
    throw error;
  }
};

export const fetchAverageResponseTime = async () => {
    try {
        const email = await getEmail();
        const response = await axios.get(`http://localhost:3010/developer/developer-dashboard/average-response-time/${email}`);
        return response.data.average_response_time;
      } catch (error) {
        console.error('Error fetching today\'s requests:', error);
        throw error;
      }
}

export const monthlyUsageRequests = async () =>{
    try{
        const email = await getEmail();
        const response = await axios.get(`http://localhost:3010/developer/developer-dashboard/monthly-usage-of-requests/${email}`);
        return response;
    }catch(error){
        console.error('Error fetching monthly usage requests', error);
        throw error;
    }
}

export const monthlyResponseTime = async () =>{
    try{
        const email = await getEmail();
        const response = await axios.get(`http://localhost:3010/developer/developer-dashboard/monthly-response-time/${email}`);
        return response;
    }catch(error){
        console.error('Error fetching monthly usage requests', error);
        throw error;
    }
}
