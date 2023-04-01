import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

function Notification({ stressLevel, stressDuration, onPressBreathingExercise, onPressMeditation }) {
  return (
    <View style={styles.container}>
     
    
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText1}>Try Breathing Exercise</Text>
        <View style={styles.resourceText}>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.healthline.com/health/box-breathing')}>Box Breathing</Text>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.medicalnewstoday.com/articles/324417')}>4-7-8 Breathing</Text>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.yogajournal.com/practice/almost-instant-stress-relief/')}>Alternate Nostril Breathing</Text>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.yogajournal.com/practice/almost-instant-stress-relief/')}>Lion's Breath</Text>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/decrease-stress-by-using-your-breath/art-20267197')}>Deep Breathing with Equal Counts</Text>
        </View>
      </View>
      <Text style={styles.summaryText1}>Try Meditation Exercise</Text>
        <View style={styles.resourceText}>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=inpok4MKVLM')}>10-Minute Guided Meditation for Stress</Text>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4pLUleLdwY4')}>5-Minute Guided Meditation for Stress and Anxiety</Text>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=F28MGLlpP90')}>15-Minute Guided Meditation for Stress and Anxiety</Text>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=MIr3RsUWrdo')}>20-Minute Guided Meditation for Stress and Anxiety</Text>
          <Text style={styles.resourceLink} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6wenE_c1mmA')}>30-Minute Guided Meditation for Stress and Anxiety</Text>
        </View>
      <View style={styles.reminderContainer}>
        <Text style={styles.reminderText}>Remember to take breaks and practice self-care throughout the day.</Text>
      </View>
      <View style={styles.resourceContainer}>
        <Text style={styles.resourceText}>If you need professional help, consider seeking counseling or calling a hotline.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
    // animationDuration: '8s',
    // animationName: 'slideInDown',
    // animationIterationcount: 1,
  },
  summaryContainer: {
    marginBottom: 40,
    
  },
  summaryText: {
    fontSize: 18,
    textAlign: 'center',
    color:"#ff8c00",
    marginTop: 10, marginBottom: 20
    // animationDuration: '6s',
    // animationName: 'fadeInLeft',
    // animationIterationcount: 1,
  },
  summaryText1: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color:"#ff8c00",
    marginBottom: 20
    // animationDuration: '6s',
    // animationName: 'fadeInUp',
    // animationIterationcount: 1,
  },
  suggestionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  suggestionButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  suggestionButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  reminderContainer: {
    marginBottom: 20,
    marginTop:20
  },
  reminderText: {
    fontSize: 16,
    textAlign: 'center',
    color:"#ff8c00"
  },
  resourceContainer: {
    marginBottom: 10,
    marginTop:10
    
  },
  resourceText: {
    fontSize: 16,
    textAlign: 'center',
    color:"#ff8c00",
    marginTop: 10
    // animationDuration: '8s',
    // animationName: 'fadeInRight',
    // animationIterationcount: 1,
  },
  resourceLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 5,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10   
    // animationDuration: '6s',
    // animationName: 'fadeInUp',
    // animationIterationcount: 1,
  },
});

export default Notification;