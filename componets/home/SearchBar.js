import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import SearchStyles from "../../styles/SearchStyles";
export default function SearchBar({ cityhandler }) {
  return (
    <View style={SearchStyles.Container}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyD-tZDCkTsiF_dxRkByAJikjzh8TRwjC3Y" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityhandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={SearchStyles.Button}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={SearchStyles.AntDesign}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
