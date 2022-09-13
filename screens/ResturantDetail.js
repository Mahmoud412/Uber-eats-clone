import { View, Text } from "react-native";
import React from "react";
import About from "../componets/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../componets/restaurantDetail/MenuItems";
import ViewCart from "../componets/restaurantDetail/ViewCart";
const foods = [
  {
    title: "Lasagna",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/photos/lasagna-on-a-square-white-plate-picture-id535851351?k=20&m=535851351&s=612x612&w=0&h=jdWOk9G_OOzHvPrvFrigqzk3EoucmIhUZr1-ey9NcGM=",
  },
  {
    title: "Tandoori Chicken",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/tandoori-chicken.jpg",
  },
  {
    title: "Chilaquiles",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://keviniscooking.com/wp-content/uploads/2021/12/Chilaquiles-Verdes-square.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description: "with butter lettuce , tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-327831_11-3524329.jpg",
  },
];

export default function ResturantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
