import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import Register from "./screens/Register";
import Account from "./screens/Account";
import LoginScreen from "./screens/LoginScreen";

const store = configureStore();

const Stack = createStackNavigator();
const screenoptions = {
  headerShown: false,
};

export const SignedInStack = () => (
  <NavigationContainer>
    <ReduxProvider store={store}>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenoptions}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="ResturantDetail" component={ResturantDetail} />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </ReduxProvider>
  </NavigationContainer>
);

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={screenoptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
);
