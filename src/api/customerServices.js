import axios from "axios";
import { BASE_URL } from "../constants/url";

export const getCustomers = async ({ page, limit, search }) => {
  try {
    const response = await axios.get(BASE_URL + "customers/getCustomers", {
      params: { page, limit, search },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
