import axios from "axios";
import { BASE_URL } from "../constants/url";

const url = BASE_URL + "orders/";

export const getOrders = async ({
  status,
  startDate,
  endDate,
  resourceType,
  page = 1,
  pageSize = 15,
}) => {
  try {
    const response = await axios.get(url + "getOrders", {
      params: {
        status,
        startDate,
        endDate,
        resourceType,
        page,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const updateOrderStatus = async (id, orderStatus) => {
  try {
    const response = await axios.post(url + "updateOrderStatus", {
      id,
      orderStatus,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};
