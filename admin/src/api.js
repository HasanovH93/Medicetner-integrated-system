import axiosInstance from "./axiosInstance"; // Make sure the path is correct

const API_URL = process.env.REACT_APP_API_URL;

export const fetchAllOrders = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/orders/all-orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all orders:", error);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const fetchOrder = async (orderId, setOrder) => {
  try {
    console.log(orderId);
    const response = await axiosInstance.get(
      `http://localhost:3030/orders/single/${orderId}`
    );
    setOrder(response.data.data);
  } catch (error) {
    console.error("Error fetching order data:", error);
  }
};
