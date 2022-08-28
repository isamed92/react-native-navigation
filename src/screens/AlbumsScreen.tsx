import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {authState,logout} = useContext(AuthContext)
  const {isLoggedIn} = authState;
  return (
    <View>
      <Text style={styles.title}>AlbumsScreen</Text>
      { isLoggedIn && 
        <TouchableOpacity style={styles.btn} onPress={logout}>
          <Text style={styles.btnTxt}> Logout </Text>
          </TouchableOpacity>
        }
    </View>
  )
}
