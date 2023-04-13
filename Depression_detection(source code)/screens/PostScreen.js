import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

console.disableYellowBox = true;

const PostScreen = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasMediaPermission(status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync();
      setImage(data.uri);
    }
  };

  if (hasCameraPermission === null || hasMediaPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false || hasMediaPermission === false) {
    return <Text>No access to camera or gallery</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={{ flex: 1 }}
          type={Platform.OS === 'ios' ? Camera.Constants.Type.front : Camera.Constants.Type.back}
        >
          <View style={styles.cameraView}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.buttonText}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.button2} onPress={pickImage}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
        {image && (
          <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#ff8c00',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 280,
  },
  button2: {
    height: 50,
    width: 200,
    backgroundColor: '#ff8c00',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 55,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',  
},
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default PostScreen;