import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import PrimaryButton from '../comp/PrimaryButton';
import Title from '../comp/title';

function GameOverScreen({roundsNumber, userNumber,onStartNewGame}) {
  return (
    <View>
      <Title>GAME OVER FUCKER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.imageContainer} source={require('../image/success.png')} />
      </View>
      <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> reounds to guess the Number <Text>{userNumber}</Text>.</Text>
      <PrimaryButton  onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    width: 400,
    height: 400,
    borderWidth: 5,
    borderColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  summaryText:{
    fontFamily: 'open-sans',
    fontSize: '40px',
    textAlign: 'center',
  },
  highlight:{
    fontFamily: 'open-sans',
    color: 'black',
  }
});
