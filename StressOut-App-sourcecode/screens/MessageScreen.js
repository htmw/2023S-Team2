// Import necessary components from React and React Native libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Array of questions to be asked during the quiz
const questions = [
  'Have you felt sad or empty most of the day nearly every day?',
  'Have you lost interest in activities that you used to enjoy?',
  'Have you experienced significant weight loss or gain without trying?',
  'Have you experienced insomnia or hypersomnia?',
  'Have you had thoughts of self-harm or suicide?'
];

// Define a functional component called MessageScreen
const MessageScreen = () => {
  // Declare states for the question index, score, and finishedQuiz
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finishedQuiz, setFinishedQuiz] = useState(false);

  // Handle the user's answer to a question and update the score and/or progress through the quiz
  const handleAnswer = (answer) => {
    if (answer === 'yes') {
      setScore(score + 1);
    }

    if (questionIndex === questions.length - 1) {
      if (score >= 3) {
        alert('You may be experiencing depression. Please consult with a mental health professional.');
      } else {
        alert('You may not be experiencing depression. However, please consult with a mental health professional if you have concerns.');
      }

      setFinishedQuiz(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  // Handle user's retake of the quiz by resetting question index, score, and finishedQuiz states
  const handleRetakeQuiz = () => {
    setScore(0);
    setQuestionIndex(0);
    setFinishedQuiz(false);
  };

  // Render the retake quiz button if the user has finished; otherwise, render the question and answer buttons
  if (finishedQuiz) {
    return (
      <View style={styles.container}>
        <Button title="Retake Quiz" onPress={handleRetakeQuiz} color="#ff8c00" titleStyle={styles.boldButton} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{questions[questionIndex]}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Yes" onPress={() => handleAnswer('yes')} color="#ff8c00" titleStyle={styles.boldButton} />
          <Button title="No" onPress={() => handleAnswer('no')} color="#ff8c00" titleStyle={styles.boldButton} />
        </View>
      </View>
    );
  }
};

// Define custom styles using StyleSheet API
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
    color: "#ffa500"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  boldButton: {
    fontWeight: 'bold',
    color: '#ff8c00',
  },
});

// Export the MessageScreen component as the default export
export default MessageScreen;
