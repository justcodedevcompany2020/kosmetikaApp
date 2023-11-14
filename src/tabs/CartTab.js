import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import GeneralInfoScreen from "../screens/ordering/GeneralInfoScreen";
import LocationInfoScreen from "../screens/ordering/LocationInfoScreen";
import AddressInfoScreen from "../screens/ordering/AddressInfoScreen";
import PaymentScreen from "../screens/ordering/PaymentScreen";
import SuccessScreen from "../screens/SuccessScreen";

const Stack = createNativeStackNavigator();

export default function CartTab(props) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Cart"
    >
      <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
      <Stack.Screen
        name="GeneralInfo"
        component={GeneralInfoScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="LocationInfo"
        component={LocationInfoScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="AddressInfo"
        component={AddressInfoScreen}
      ></Stack.Screen>
      <Stack.Screen name="Payment" component={PaymentScreen}></Stack.Screen>
      <Stack.Screen name="Success" component={SuccessScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
