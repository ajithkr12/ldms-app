// /users/getAllUsers
import axios from "axios";
import { BASE_URL } from "../constants/url";

const url = BASE_URL;

// /users/getRoles
export const getAllUsers = async () => {
  try {
    const response = await axios.get(url + "users/getAllUsers");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getAllRoles = async () => {
  try {
    const response = await axios.get(url + "masters/getAllRoles");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getResourcesAndAccessMasters = async () => {
  try {
    const response = await axios.get(
      url + "masters/getResourcesAndAccessMasters"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// /users/createDashboardUser
export const createRoleAndAssignAccess = async (payload) => {
  try {
    const response = await axios.post(
      url + "users/createRoleAndAssignAccess",
      payload
    );
    return {
      success: true,
      data: response.data,
      error: null,
    };
  } catch (error) {
    console.error("Error creating dashboard user:", error);
    return {
      success: false,
      data: null,
      error: error,
    };
  }
};

// /users/updateRoleAndAssignAccess
export const updateRoleAndAssignAccess = async (payload) => {
  try {
    const response = await axios.post(
      url + "users/updateRoleAndAssignAccess",
      payload
    );
    return {
      success: true,
      data: response.data,
      error: null,
    };
  } catch (error) {
    console.error("Error creating dashboard user:", error);
    return {
      success: false,
      data: null,
      error: error,
    };
  }
};

// /users/getRoleResourceAccess
export const getRoleResourceAccess = async (roleId) => {
  try {
    const response = await axios.get(url + `users/getRoleResourceAccess`, {
      params: {
        roleId: roleId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching role resource access:", error);
    throw error;
  }
};

// /users/createDashboardUser
export const createDashboardUser = async (name, email, password, roleId) => {
  try {
    const payload = {
      name: name,
      email: email,
      password: password,
      roleId: roleId,
    };
    const response = await axios.post(
      url + "users/createDashboardUser",
      payload
    );
    return {
      success: true,
      data: response.data,
      error: null,
    };
  } catch (error) {
    console.error("Error creating dashboard user:", error);
    return {
      success: false,
      data: null,
      error: error,
    };

    // throw error;
    // return error;
  }
};

// /users/editDashboardUser
export const editDashboardUser = async (id, name, email, roleId) => {
  try {
    const payload = {
      id: id,
      name: name,
      email: email,
      roleId: roleId,
    };
    const response = await axios.post(url + "users/editDashboardUser", payload);
    return {
      success: true,
      data: response.data,
      error: null,
    };
  } catch (error) {
    console.error("Error creating dashboard user:", error);
    return {
      success: false,
      data: null,
      error: error,
    };

    // throw error;
    // return error;
  }
};

// /auth/login
export const login = async (email, password) => {
  try {
    const payload = {
      email: email,
      password: password,
    };
    const response = await axios.post(url + "auth/login", payload);

    // Store the JWT token in localStorage
    if (response.data && response.data.token) {
      localStorage.setItem("jwtToken", response.data.token);
    }

    return {
      success: true,
      data: response.data,
      error: null,
    };
  } catch (error) {
    console.error("Error during login:", error);
    return {
      success: false,
      data: null,
      error: error,
    };
  }
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("jwtToken");
  console.log("TOKEN", token);
  return token !== null; // Returns true if the token exists, false otherwise
};

export const logout = () => {
  console.log("REMOVED TOKEN");
  localStorage.removeItem("jwtToken"); // Remove the JWT token from localStorage
};

// createDashboardUser;
