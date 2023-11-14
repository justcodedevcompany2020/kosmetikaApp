import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen";
import SmsScreen from "../screens/SmsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function RegisterTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
      <Stack.Screen name="Sms" component={SmsScreen}></Stack.Screen>
      <Stack.Screen
        options={{ gestureEnabled: false }}
        name="Welcome"
        component={WelcomeScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
