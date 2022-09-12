import { View, Text } from "react-native";
import React from "react";
import About from "../componets/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../componets/restaurantDetail/MenuItems";

export default function ResturantDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
