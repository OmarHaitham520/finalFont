import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import products from "../screens/products";
import cart from "../screens/cart";
import { Platform } from "react-native";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "#1E90FF" : "",
  },

  headerTintColor: Platform.OS === "android" ? "white" : "#1E90FF",
};
const navigator = createStackNavigator(
  {
    products: products,
    cart: cart,

  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

export default createAppContainer(navigator);
