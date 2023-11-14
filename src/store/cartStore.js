import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useCartStore = create((set, get) => ({
  items: {},

  addItem: (product) => {
    set(async (state) => {
      const itemsCopy = state.items;

      if (state.items[product._id]) {
        itemsCopy[product._id].count += 1;
      } else {
        itemsCopy[product._id] = { ...product, count: 1 };
      }

      await AsyncStorage.setItem("cart", JSON.stringify(itemsCopy));

      return {
        items: itemsCopy,
      };
    });
  },

  decrement: (productId) => {
    set(async (state) => {
      const itemsCopy = state.items;

      if (state.items[productId].count > 1) {
        itemsCopy[productId].count -= 1;
      }

      await AsyncStorage.setItem("cart", JSON.stringify(itemsCopy));

      return {
        items: itemsCopy,
      };
    });
  },

  increment: (productId) => {
    set(async (state) => {
      const itemsCopy = state.items;

      if (state.items[productId]) {
        itemsCopy[productId].count += 1;
      }

      await AsyncStorage.setItem("cart", JSON.stringify(itemsCopy));

      return {
        items: itemsCopy,
      };
    });
  },

  removeItem: (productId) => {
    set(async (state) => {
      const itemsCopy = state.items;

      if (state.items[productId]) {
        delete itemsCopy[productId];
      }

      await AsyncStorage.setItem("cart", JSON.stringify(itemsCopy));

      return {
        items: itemsCopy,
      };
    });
  },
}));
