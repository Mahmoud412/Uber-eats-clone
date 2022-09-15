import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
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
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.profile}
          source={{
            uri: "https://photo-cdn2.icons8.com/8A-k2Q0nwB6iwqiawJtXPh-SGC2fdnUUytgTOniWAKc/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTQyLzA2MTg1/YTMyLTI5OGItNGI0/Ny05NGQ1LWVhMTMy/YTNiNGE0NC5qcGc.jpg",
          }}
        />
        <Text style={styles.profileName}>{user.email}</Text>
        <Text style={styles.userName}>Test</Text>
      </View>
      <Button
        buttonStyle={{ backgroundColor: "#06c167" }}
        title="Settings"
        containerStyle={{ width: "80%", alignSelf: "center", marginTop: 100 }}
        icon={{
          name: "settings",
          type: "material",
          size: 15,
          color: "white",
        }}
      />
      <Button
        buttonStyle={{ backgroundColor: "#06c167" }}
        title="Order History"
        containerStyle={{ width: "80%", alignSelf: "center", marginTop: 30 }}
        icon={{
          name: "history",
          type: "material",
          size: 15,
          color: "white",
        }}
      />
      <Button
        buttonStyle={{ backgroundColor: "#06c167" }}
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

const styles = StyleSheet.create({
  profile: {
    width: 150,
    height: 150,
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 100,
    alignSelf: "center",
    resizeMode: "cover",
    borderColor: "black",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  profileName: {
    fontSize: 25,
    marginTop: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  userName: {
    fontSize: 14,
    fontWeight: "regular",
    textAlign: "center",
    marginTop: 4,
  },
});

export default Profile;
