import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import PersonalScreen from "../screens/PersonalScreen";
import OrderScreen from "../screens/OrderScreen";
import OrdersScreen from "../screens/OrdersScreen";
import InfoScreen from "../screens/InfoScreen";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SetToken } from "../store/action/successAction";

const Stack = createNativeStackNavigator();

export default function ProfileTab() {
  const dispatch = useDispatch()
  useEffect(() => {
    SetTokens()
  }, [])
  const SetTokens = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      dispatch(SetToken(token))
    }
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
      <Stack.Screen name="Personal" component={PersonalScreen}></Stack.Screen>
      <Stack.Screen name="Orders" component={OrdersScreen}></Stack.Screen>
      <Stack.Screen name="Order" component={OrderScreen}></Stack.Screen>
      <Stack.Screen name="Info" component={InfoScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
