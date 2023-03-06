import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import FeedScreen from "./screens/FeedScreen";
import PostScreen from "./screens/PostScreen";
import MessageScreen from "./screens/MessageScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {Image, KeyboardAvoidingView, LogBox, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";


LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === "Feed") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (routeName === "Post") {
            iconName = "add-circle-outline";
          } else if (routeName === "Message") {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
          } else if (routeName === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (routeName === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: "#FFc500",
        tabBarInactiveTintColor: "orange",
        tabBarStyle: { height: 80, padding: 10 },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name={"Feed"} component={FeedScreen} />
      <Tab.Screen name={"Message"} component={MessageScreen} />
      <Tab.Screen name={"Post"} component={PostScreen} />
      <Tab.Screen name={"Notification"} component={NotificationScreen} />
      <Tab.Screen name={"Profile"} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (

    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={TabStack}
          options={({}) => ({
            headerTitleAlign: "center",
            title: "StreesOut",
            headerTitleStyle: {
              color: "#ff8c00",
              fontSize: 30,
              marginLeft: 10,
            },
              headerStyle: {
              shadowColor: "#ffc500",
              background: "black",
              elevation: 0,

            },

          })}
        />
          <AppStack.Screen name="Register" component={RegisterScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
