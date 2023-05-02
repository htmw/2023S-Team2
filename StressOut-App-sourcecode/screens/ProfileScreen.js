import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

function ProfileScreen({ navigation }) {
    const currentUser = auth.currentUser; // Get the current logged-in user

    signOutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error: ' + errorMessage)
        });
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome {currentUser.email}</Text>
            {/* Display the current user's email */}
            <TouchableOpacity onPress={signOutHandler}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
            <Image
               style={styles.logo3}
               source={require('../assets/users/logo3.jpeg')}
      />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ff8c00'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5
    },
    logo3:{
      width: '100%',
      height: '37%',
      position: "absolute",
      resizeMode: 'contain',
      bottom: 40,

    }
});

export default ProfileScreen;