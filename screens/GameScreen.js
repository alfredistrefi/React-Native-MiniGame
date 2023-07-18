import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Title from '../comp/title';
import NumberContainer from '../comp/numberContainer';
import PrimaryButton from '../comp/PrimaryButton';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the desired icon library

function generateRandomBetween(min, max, exclude) {
  let rndNum = Math.floor(Math.random() * (max - min)) + min;

  while (rndNum === exclude) {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  }

  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [hasLied, setHasLied] = useState(false);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    let minBoundary = 1;
let maxBoundary = 100;

  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('You lied!', 'Please be honest.', [{ text: 'Cancel' }]);
      setHasLied(true);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
          <Icon name="minus" size={20} color="white" />
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
          <Icon name="plus" size={20} color="white" />
        </PrimaryButton>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
