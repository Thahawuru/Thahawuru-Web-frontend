import axios from 'axios';

export const getTotalAPIcalls = async () => {
    try {
        const response = await axios.get(`http://localhost:3010/admin/admin-dashboard/total-api-calls`);
        return response.data.totalRequests;
    } catch (error) {
        console.error('Error fetching total requests:', error);
        throw error;
    }
};

export const getAPIDataTypes = async () => {
    try {
        const response = await axios.get(`http://localhost:3010/admin/admin-dashboard/api-data-types`);
        return response.data;
    } catch (error) {
        console.error('Error fetching total requests:', error);
        throw error;
    }
};

export const getDailyRequests = async () => {
    try {
        const response = await axios.get(`http://localhost:3010/admin/admin-dashboard/daily-requests`);
        return response.data.dailyRequests;
    } catch (error) {
        console.error('Error fetching daily requests:', error);
        throw error;
    }
};
