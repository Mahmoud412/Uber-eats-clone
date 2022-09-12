import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";

export default function Navigation() {
  const Stack = createStackNavigator();

  const screenoptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenoptions}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="ResturantDetail" component={ResturantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
