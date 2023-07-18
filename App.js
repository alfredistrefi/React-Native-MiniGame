import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false); 
  };

  
  function gameHandlerOver(){
    setGameIsOver(true)
  }

  function startNewGameHandler(){
 setUserNumber(null);
 setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameHandlerOver}/>;
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }

  return (

    <View style={styles.rootScreen}>
      <ImageBackground
        source={require('./image/background.png')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
      <SafeAreaView style={styles.rootScreen}>
      {screen}
      </SafeAreaView>
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
  imageBackground: {
    flex: 1,
  },
});

export default App;
