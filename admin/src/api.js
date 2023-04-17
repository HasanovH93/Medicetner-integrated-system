import axios from "axios";

const API_URL = "http://localhost:3030";

export const fetchAllOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/orders/all-orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all orders:", error);
  }
};
