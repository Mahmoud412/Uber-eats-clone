import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { firebase, db } from "../../firebase";
import { icon, Button } from "react-native-elements";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const onLogin = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('"firebase login Successfully", email, password');
  } catch (error) {
    Alert.alert(error.message);
  }
};

const LoginForm = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        onLogin(values.email, values.password);
      }}
      validationSchema={LoginValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <View style={{ marginBottom: 50 }}>
            <Image
              style={styles.logo}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQImoA5nkyGOiHR0DYTwZ3j2pv41tAgcuk3BDPi27r-j5gv7jnQhuyPJER34RmP6eptYo&usqp=CAU",
              }}
            />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Email"
            textContentType="emailAddress"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            textContentType="password"
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <Button
            buttonStyle={{ backgroundColor: "#06c167" }}
            onPress={handleSubmit}
            title="Sgin Up"
            style={styles.button}
            icon={{
              name: "login",
              type: "material-community",
              color: "#fff",
              size: 20,
            }}
          />
          <View style={styles.signupContainer}>
            <Text> Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "#add8e6" }}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "gray",
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
  },
  Container: {
    marginTop: 50,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginLeft: 20,
  },
  button: {
    borderRadius: 50,
    marginTop: 30,
    height: 100,
    width: 398,
    margin: 20,
    alignSelf: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;
