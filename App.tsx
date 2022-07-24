import { StyleSheet, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator';
import { MenuLateral } from './src/navigator/MenuLateral';


const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <MenuLateralBasico/> */}
      <MenuLateral/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})