import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import StyleSheet from "../../styles/StyleSheet";
export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 5 }}
          onPress={() =>
            navigation.navigate("ResturantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View style={StyleSheet.container}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={StyleSheet.image}
    />
    <TouchableOpacity style={StyleSheet.icon}>
      <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={StyleSheet.info}>
    <View>
      <Text style={StyleSheet.textname}>{props.name}</Text>
      <Text style={StyleSheet.textmin}>30-40 ' min</Text>
    </View>
    <View style={StyleSheet.rating}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
