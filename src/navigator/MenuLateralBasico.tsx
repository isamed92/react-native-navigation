import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens';
import {StackNavigator} from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  
  const {width} = useWindowDimensions()
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 750 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false  // Oculta la hamburguesa
      }}
    >
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </Drawer.Navigator>
  );
};
