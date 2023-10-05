// EditProfileScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { writeUserData } from "../firebase";
import { horizontalScale, verticalScale } from './Metrics';

const EditProfileScreen = ({ userData, onSave, onCancel }) => {
  const [name, setName] = useState(userData.name);
  const [gender, setGender] = useState(userData.gender);
  const [age, setAge] = useState(userData.age);
  const [dateOfBirth, setDateOfBirth] = useState(userData.dateOfBirth);
  const [medicalHistory, setMedicalHistory] = useState(userData.medicalHistory);
  const [activityHistory, setActivityHistory] = useState(userData.activityHistory);

  const handleSaveProfile = () => {
    onSave({
      name,
      gender,
      age,
      dateOfBirth,
      medicalHistory,
      activityHistory,
    });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          onChangeText={(text) => setGender(text)}
          value={gender}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
          value={age}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          onChangeText={(text) => setDateOfBirth(text)}
          value={dateOfBirth}
        />
        <TextInput
          style={styles.input}
          placeholder="Medical History"
          onChangeText={(text) => setMedicalHistory(text)}
          value={medicalHistory}
        />
        <TextInput
          style={styles.input}
          placeholder="Activity History"
          onChangeText={(text) => setActivityHistory(text)}
          value={activityHistory}
        />
        <TouchableOpacity onPress={handleSaveProfile} style={styles.button}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel} style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: horizontalScale(20),
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: verticalScale(20),
    color: "#ff8c00",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    marginBottom: verticalScale(10),
    borderRadius: 50,
    width: "100%",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginTop: verticalScale(10),
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditProfileScreen;
