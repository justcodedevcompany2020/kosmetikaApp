import AsyncStorage from "@react-native-async-storage/async-storage";

export async function fetchCollection(key) {
  let collection = {};
  let fetchedCollection = await AsyncStorage.getItem(key);

  if (fetchedCollection) {
    collection = JSON.parse(fetchedCollection);
  }

  return collection;
}
