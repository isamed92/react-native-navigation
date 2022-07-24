import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen, Page2Screen, Page3Screen, PersonaScreen } from '../screens';

export type RootStackParams = {
  Page1Screen: undefined,
  Page2Screen: undefined,
  Page3Screen: undefined,
  PersonaScreen: {id: number, name: string},
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Page3Screen'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen name="Page1Screen" component={Page1Screen} options={ {title: 'Pagina 1'} }/>
      <Stack.Screen name="Page2Screen" component={Page2Screen} options={ {title: 'Pagina 2'} }/>
      <Stack.Screen name="Page3Screen" component={Page3Screen} options={ {title: 'Pagina 3'} }/>
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} options={ {title: 'Persona'} }/>
    </Stack.Navigator>
  );
}