import {StyleSheet, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateralBasico} from './src/navigator';
import {MenuLateral} from './src/navigator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';
import {FC} from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}

        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}:{children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
