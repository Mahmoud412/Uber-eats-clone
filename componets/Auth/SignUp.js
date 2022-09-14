import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { firebase, db } from "../../firebase";
import { Icon, Button } from "react-native-elements";

const RegisterFromValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(/^[0-9]*$/, "Only Numbers are allowed"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const onSignup = async (email, password, username, phone_number) => {
  try {
    const authuser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(
      "firebase User Created Successfully",
      email,
      password,
      username,
      phone_number
    );

    db.collection("users").doc(authuser.user.email).set({
      owner_uid: authuser.user.uid,
      username: username,
      email: authuser.user.email,
      phonenumber: phone_number,
    });
  } catch (error) {
    Alert.alert("My Lord...", error.message);
  }
};
const SignUp = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phoneNumber: "", password: "" }}
      onSubmit={(values) => {
        onSignup(
          values.email,
          values.password,
          values.name,
          values.phoneNumber
        );
      }}
      validationSchema={RegisterFromValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
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
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Name"
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
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
            onChangeText={handleChange("phoneNumber")}
            onBlur={handleBlur("phoneNumber")}
            value={values.phoneNumber}
            placeholder="Phone Number"
            keyboardType="numeric"
            textContentType="telephoneNumber"
          />
          {errors.phoneNumber && (
            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder="password"
            secureTextEntry={true}
            textContentType="password"
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
            <Text> Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={{ color: "#add8e6" }}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUp;

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
