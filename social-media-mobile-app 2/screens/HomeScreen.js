
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity, Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {

  return (

      <KeyboardAvoidingView style={styles.container} behavior="padding">

        <View style={styles.container}>
          <Text style={styles.titleText}>
            Welcome,
          </Text>
          <Text style={styles.description}>
            Your personal depression detection companion. We understand that taking care of your mental health can be challenging, which is why we created this app to help you detect early signs of depression and take proactive steps towards better mental health.

            Our app is designed to provide you with a safe and confidential space to track your mood, detect changes, and connect with resources that can help. Whether you're experiencing mild symptoms or struggling with severe depression, we're here to support you every step of the way.</Text>

          <Text style={styles.message}>We believe that everyone deserves access to quality mental healthcare, and we hope that this app can be a valuable tool in your mental health journey. So why wait? Let's get started today and take the first step towards a happier, healthier life.</Text>
        </View>


      </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "justify",
    margin: 10,
    color: "#ffa500"
  },
  title: {
    marginBottom: 30,
  },
  titleText: {
    fontSize: 50,
    fontWeight: "900",
    color: "#ffa500",
    marginRight: 130,
    margin: 5,
    marginTop: 200



  },
  text:{
    borderTopLeftRadius: 130,
    fontSize: 40,
    fontWeight: "700",
    color: "#ffa500",

  },
  description: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "left",
    color: "#ffa500",
    margin: 15
  },
  message: {
    fontSize: 18,
    textAlign: "left",
    color: "#ffa500",
    margin: 15,
    marginBottom: 200,


  }

});







