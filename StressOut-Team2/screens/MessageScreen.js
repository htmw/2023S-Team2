import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
