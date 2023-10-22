import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

export async function getLocalData(id: string): Promise<string | null> {
  try {
    let value;
    if (Platform.OS === "web") {
      value = localStorage.getItem(id);
    } else {
      const storedValue = await AsyncStorage.getItem(id);
      value = storedValue !== null ? JSON.parse(storedValue) : null;
    }
    return value;
  } catch (error) {
    console.error(`Error getting data for ID ${id}:`, error);
    return null;
  }
}

export async function setLocalData(id: string, value: string) {
  try {
    if (Platform.OS === "web") {
      localStorage.setItem(id, value);
    } else {
      await AsyncStorage.setItem(id, JSON.stringify(value));
    }
    console.log(`Data for ID ${id} set successfully.`);
  } catch (error) {
    console.error(`Error setting data for ID ${id}:`, error);
  }
}
