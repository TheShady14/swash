import axios from "axios";

// Base API configuration
const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Example API endpoint
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// API endpoints
export const apiService = {
  // Get all items
  getItems: async () => {
    try {
      const response = await API.get("/posts");
      return response.data;
    } catch (error) {
      console.error("Error getting items:", error);
      throw error;
    }
  },

  // Get item by ID
  getItemById: async (id: number) => {
    try {
      const response = await API.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error getting item ${id}:`, error);
      throw error;
    }
  },

  // Create a new item
  createItem: async (data: any) => {
    try {
      const response = await API.post("/posts", data);
      return response.data;
    } catch (error) {
      console.error("Error creating item:", error);
      throw error;
    }
  },

  // Update an item
  updateItem: async (id: number, data: any) => {
    try {
      const response = await API.put(`/posts/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating item ${id}:`, error);
      throw error;
    }
  },

  // Delete an item
  deleteItem: async (id: number) => {
    try {
      const response = await API.delete(`/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting item ${id}:`, error);
      throw error;
    }
  },
};

export default apiService;
