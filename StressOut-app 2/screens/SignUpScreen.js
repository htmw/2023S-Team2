// Import required libraries and functions
import * as React from 'react';
import  {useState} from 'react';
import { 
  View, 
  Text, 
  ScrollView,
  StyleSheet, 
  Image, 
  TextInput, 
  Dimensions, 
  TouchableHighlight, 
  Alert 
} from 'react-native';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "../firebase"


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

function SignUpScreen({ navigation }) {

  // State variables
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  // Sign up handler function
  signUpHandler = () => {
    if(password == password2) {
      createUserWithEmailAndPassword(auth, email,  password)
        .then((userCredential) => {
          signInHandler()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // Handle any errors
        });
    } else {
      // Display alert if passwords do not match
      alert('Passwords are not same!')
    }
  }

  // Sign in handler function
  signInHandler = () => {
    signInWithEmailAndPassword(auth, email,  password)
      .then((userCredential) => {
        navigation.navigate('Login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display error message in an alert
        alert('Error: '+ errorMessage)
      }); 
  }

  // Return JSX elements to draw UI
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
          <Image
              source={require('../assets/Logo.png')}
              style={styles.logo}
          />
      </View>

      <View>
          <Text style={styles.text}>Create an account</Text>
      </View>

      <View style={styles.LogoTextInputContainer}>
          <View style={styles.LogoContainer}>
              <Image
                  source={require('../assets/email.png')}
                  style={styles.emailLogo}
              />
          </View>
          <View style={styles.TextInputContainer}> 
              <TextInput 
                style={styles.TextInput}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                value={email}
              /> 
          </View>
      </View>

      <View style={styles.LogoTextInputContainer}>
          <View style={styles.LogoContainer}>
              <Image
                  source={require('../assets/password_unlocked.png')}
                  style={styles.passwordLogo}
              />
          </View>
          <View style={styles.TextInputContainer}> 
              <TextInput 
                style={styles.TextInput}
                placeholder="Password"
                secureTextEntry= {true}
                onChangeText={(password) => setPassword(password)}
                value={password}
              /> 
          </View>
      </View>

      <View style={styles.LogoTextInputContainer}>
          <View style={styles.LogoContainer}>
              <Image
                  source={require('../assets/password_unlocked.png')}
                  style={styles.passwordLogo}
              />
          </View>
          <View style={styles.TextInputContainer}> 
              <TextInput 
                style={styles.TextInput}
                placeholder="Repeat Password"
                secureTextEntry= {true}
                onChangeText={(password2) => setPassword2(password2)}
                value={password2}
              /> 
          </View>
      </View>

      <View style={styles.buttonContainer}>
          <TouchableHighlight 
              onPress={() => { 
                  signUpHandler()
              }}
          >
                  <View style={styles.button}> 
                      <Text style={styles.buttonText}>Sign Up</Text>
                  </View>
          </TouchableHighlight>
      </View>


      <View style={styles.LinkButton}> 
          <TouchableHighlight
              onPress={() => { 
                  navigation.navigate('Login')
              }}
          >
              <Text style={styles.LinkButtonText}>Have an account? Sign in</Text>
          </TouchableHighlight>
      </View>
    </ScrollView>
  );
}

// Export the component as default with styles
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingBottom: 150,
      backgroundColor: 'black'
  },
  logo: {
      height: 100,
      width: 350,
      resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    color: '#ff8c00',
  },
  LogoTextInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  LogoContainer: {
    height: 50,
    width: 1*deviceWidth/8,
    borderWidth: 1,
    borderColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  emailLogo: {
      height: 50,
      width: 50,
  },
  passwordLogo: {
      height: 50,
      width: 50,
  },
  TextInput: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 0,
    fontWeight: 'bold'
  },
  TextInputContainer: {
    borderRadius: 20,
    width: "80%",
    height:"100%"
  },
  buttonContainer: {
      marginTop: 25,
  },
  button: {
    backgroundColor: '#ff8c00',
    height: 50,
    width: 6*deviceWidth/8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
      color: 'white',
      fontWeight: 'bold'
  },
  LinkButton: {
      marginTop: 25
  },
  LinkButtonText: {
    fontWeight: 'bold',
        color: '#ffa500',
  }
});