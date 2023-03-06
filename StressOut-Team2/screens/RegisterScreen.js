import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ImageBackground, Image,
} from "react-native";

import { auth, db } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (confirmPassword != password) {
      alert("Password does not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCred) => {
          await setDoc(doc(db, "users", userCred.user.uid), {
            email,
            userName: username,
            profileImage:
              "https://firebasestorage.googleapis.com/v0/b/tidbit-8a75e.appspot.com/o/male-profile-image-placeholder.png?alt=media&token=b45d9ed5-e3d4-45af-b19e-cd0751878140",
            bio: "",
            followers: 0,
            followed: 0,
          })
            .then(() => {
              navigation.navigate("Home");
              setEmail("");
              setUsername("");
              setPassword("");
              setConfirmPassword("");
            })
            .catch((error) => {
              alert(error.message);
            });
        })
        .catch((error) => {
          if (error.code === "auth/weak-password") {
            alert("Password should be at least 6 characters");
          } else if (error.code === "auth/email-already-in-use") {
            alert(
              "This email is already associated with an account. Try loging in."
            );
          } else {
            console.log(
              "error code: " +
                error.code +
                "\n" +
                "error message" +
                error.message
            );
          }
        });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
          style={styles.logo}
          source={require('../assets/image/logo2.jpeg')}
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>Registration</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => {
            navigation.navigate("Login");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
          }}
        >
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'black',
  },
  title: {
    marginBottom: 40,
    alignItems: "center",
  },
  titleText: {
    borderTopLeftRadius: 130,
    fontSize: 40,
    fontWeight: "700",
    color: "#ffa500",
    marginTop: 5,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 250,
  },
  button: {
    backgroundColor: "#ff8c00",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 6,
    borderColor: "#ff8c00",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#FF8C00",
    fontWeight: "700",
    fontSize: 16,
  },
  logo:{
    marginTop: 130,
    alignItems: 'center',
    height: '15%',
    width: '100%',
  },
});
// #F50057
