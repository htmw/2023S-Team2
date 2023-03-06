import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const ProfileScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <View style={styles.container}>
      {!currentUser ? (
        <>
          <Text>You are not logged in.</Text>
          <Button
            title="Sign in"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </>
      ) : (
        <>
          <Text>{auth.currentUser.email}</Text>
          <Button
            title="Sign out"
            onPress={() => {
              signOut(auth).then(navigation.navigate("Home"));
            }}
          />
        </>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
