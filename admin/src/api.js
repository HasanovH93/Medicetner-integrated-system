import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL

export const fetchAllOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders/all-orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all orders:", error);
  }
};
