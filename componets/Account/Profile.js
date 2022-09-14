import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import firebase from "firebase";
import { Button, Icon } from "react-native-elements";

const handleSignout = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Signed out successfully!");
  } catch (erorr) {
    console.log(erorr);
  }
};

const Profile = ({ navigation }) => {
  const user = firebase.auth().currentUser;
  if (user !== null) {
    const email = user.email;
  }
  return (
    <SafeAreaView>
      <Button
        onPress={handleSignout}
        title="Log out"
        containerStyle={{ width: "80%", alignSelf: "center", marginTop: 30 }}
        icon={{
          name: "logout",
          type: "material",
          size: 15,
          color: "white",
        }}
      />
    </SafeAreaView>
  );
};

export default Profile;
