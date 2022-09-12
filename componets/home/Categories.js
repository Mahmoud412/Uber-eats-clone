import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import CategoriesStyles from "../../styles/CategoriesStyles";
const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View style={CategoriesStyles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={CategoriesStyles.icons}>
            <Image source={item.image} style={CategoriesStyles.image} />

            <Text style={CategoriesStyles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
