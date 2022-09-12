import { View, Text } from "react-native";
import React from "react";
import About from "../componets/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../componets/restaurantDetail/MenuItems";
import ViewCart from "../componets/restaurantDetail/ViewCart";

export default function ResturantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
