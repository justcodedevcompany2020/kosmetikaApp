import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CatalogScreen from "../screens/CatalogScreen";
import CategoryScreen from "../screens/CategoryScreen";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();

export default function CatalogTab(props) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={
        props.route.params ? props.route.params.screen : "Catalog"
      }
    >
      <Stack.Screen name="Catalog" component={CatalogScreen}></Stack.Screen>
      <Stack.Screen name="Category" component={CategoryScreen}></Stack.Screen>
      <Stack.Screen name="Search" component={SearchScreen}></Stack.Screen>
      <Stack.Screen
        name="SearchResult"
        component={SearchResultScreen}
      ></Stack.Screen>
      <Stack.Screen name="Product" component={ProductScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
