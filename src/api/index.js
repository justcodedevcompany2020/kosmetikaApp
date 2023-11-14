import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export const baseUrl = "https://www.dicaficu.beget.app";
export const baseUrl = "https://basrabackend.justcode.am/uploads/";

export async function fetchCategories() {
  const response = await axios.get(`${baseUrl}/categories`);
  return response.data;
}

export async function fetchProducts() {
  const response = await axios.get(`${baseUrl}/products`);
  return response.data;
}

export async function fetchProduct(id) {
  const response = await axios.get(`${baseUrl}/products/${id}`);
  return response.data;
}

export async function fetchProductsSelection(key, value) {
  const response = await axios.get(`${baseUrl}/products/${key}/${value}`);
  return response.data;
}

export async function fetchCollections() {
  const response = await axios.get(`${baseUrl}/compilations`);
  return response.data;
}

export async function fetchCurrentUser(phone) {
  const response = await axios.post(
    `${baseUrl}/users/current`,
    JSON.stringify({
      phone,
    }),
    { headers: { "Content-Type": "application/json" } },
  );
  return response.data;
}

export async function createUser(phone) {
  const response = await axios.post(
    `${baseUrl}/users`,
    JSON.stringify({ phone }),
    { headers: { "Content-Type": "application/json" } },
  );

  return response.data;
}
