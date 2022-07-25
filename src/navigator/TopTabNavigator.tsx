import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { LogBox, Text } from 'react-native';
import { AlbumsScreen, ChatScreen, ContactsScreen } from '../screens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

LogBox.ignoreLogs(['Sending'])

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets()
  return (
    <Tab.Navigator style={{
      paddingTop: top
    }} 
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
          tabBarPressColor: colors.primary,
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: colors.primary
          },
          tabBarStyle: {
            borderTopColor: colors.primary,
            borderTopWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
          },
          tabBarIcon: ({color, focused}) => {
            let iconName: string = ''
  
            switch (route.name) {
              case 'Chat':
                iconName= 'at-outline'
                break;
              case 'Contacts':
                iconName= 'bug-outline'
                break;
              case 'Albums':
                iconName= 'leaf-outline'
                break;
            }
            return <Icon name={iconName} size={20} style={{color}} />
          },
      })}
    
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}