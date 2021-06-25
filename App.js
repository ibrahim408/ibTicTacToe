/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './src/component/Button'
import Keypad from './src/component/Keypad'
import {useGame} from './src/hooks/useGame'


function App(){

  const { board, onPressCell, onPressRestart }   = useGame();

  console.log();
  
  return (
    <View style={styles.container}>
      <Keypad board={board} onPressCell={onPressCell} />
      <Button onPressRestart={onPressRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:  'column'
  }
})


export default App;
