import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../componets/HeaderTabs";
import SearchBar from "../componets/SearchBar";
import Categories from "../componets/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../componets/RestaurantItems";
import axios from "axios";

const YELP_API_KEY =
  "OTSAaTeIvVnQGHaD-f94B51SCwFt40HYfNYjqApXnKXnSyZggvEHcY3E-NTRMC0cMmddlQ5p0eDq5ggpjp7zGcGsl4VjWMHpa-KEeb-ReazgsMnzDig8ComP9_4cY3Yx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
      params: {
        term: "restaurants",
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
