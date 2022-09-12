import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

export default function Navigation() {
  const Stack = createStackNavigator();

  const screenoptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenoptions}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="ResturantDetail" component={ResturantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
