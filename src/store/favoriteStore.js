import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useFavoriteStore = create((set) => ({
  items: {},
  toggleItem: (product) => {
    set(async (state) => {
      const itemsCopy = state.items;
      if (state.items[product._id]) {
        delete itemsCopy[product._id];
      } else {
        itemsCopy[product._id] = product;
      }

      await AsyncStorage.setItem("favorite", JSON.stringify(itemsCopy));

      return {
        items: itemsCopy,
      };
    });
  },
}));
