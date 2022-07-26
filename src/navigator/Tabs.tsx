import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen, Tab2Screen, Tab3Screen} from '../screens';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';



import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator 
      barStyle={{backgroundColor: colors.primary}}
      sceneAnimationEnabled
      screenOptions={({route})=> ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = ''

          switch (route.name) {
            case 'Tab1Screen':
              iconName= 'bug-outline'
              break;
            case 'TopTabNavigator':
              iconName= 'build-outline'
              break;
            case 'StackNavigator':
              iconName= 'bandage-outline'
              break;
          }
          return <Icon name={iconName} size={20} color='white' />

        },
      })
    
    }

    
    >
        <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      {/* <Tab.Screen name="Tab3Screen" component={ Tab3Screen } /> */}
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          // borderTopWidth: 0
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, size, focused}) => {
          let iconName: string = ''

          switch (route.name) {
            case 'Tab1Screen':
              iconName= 'at-outline'
              break;
            case 'TopTabNavigator':
              iconName= 'battery-charging-outline'
              break;
            case 'StackNavigator':
              iconName= 'camera-outline'
              break;
          }
          return <Icon name={iconName} size={20} color={color} />
        }
      })}>
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab 1', tabBarIcon: (props) => <Text style={{color: props.color}} >T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      {/* <Tab.Screen name="Tab3Screen" component={ Tab3Screen } /> */}
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
