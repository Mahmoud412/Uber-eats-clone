import { View, Text, Image } from "react-native";
import React from "react";
import ResturantDettailStyles from "../../styles/ResturantDettailStyles";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" . ");

  const description = `${formattedCategories} ${
    price ? " . " + price : ""
  } . 🎫 . ${rating} 🌟 ${reviews}`;
  return (
    <View>
      <ResturantImage image={image} />
      <ResturantName name={name} />
      <ResturantDescription description={description} />
    </View>
  );
}

const ResturantImage = (props) => (
  <Image style={ResturantDettailStyles.image} source={{ uri: props.image }} />
);

const ResturantName = (props) => (
  <Text style={ResturantDettailStyles.name}>{props.name}</Text>
);

const ResturantDescription = (props) => (
  <Text style={ResturantDettailStyles.description}>{props.description}</Text>
);
