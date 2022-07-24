import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens';
import {StackNavigator} from './StackNavigator';
import {
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Text,
} from 'react-native';
import {styles} from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator()
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>
    </Stack.Navigator>
  )
}

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 750 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: false, // Oculta la hamburguesa
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* opciones de menu */}
      <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuText}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
