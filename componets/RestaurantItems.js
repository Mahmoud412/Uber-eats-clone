import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItems() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 5 }}>
      {localRestaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{
            marginTop: 5,
            padding: 15,
            backgroundColor: "white",
          }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: 400, height: 280, resizeMode: "contain", flex: 1 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 40 }}>
      <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      left: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 15, color: "gray" }}>30-40 ' min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 40,
        width: 40,
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "center",
        right: 20,
        marginBottom: 10,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
