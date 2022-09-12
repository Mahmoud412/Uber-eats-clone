import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "#d3d3d3" }}
              fillColor="green"
            />

            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
