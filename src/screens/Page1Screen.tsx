import {Button, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
// import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';


interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: ()=> (
      <Button title='Menu' onPress={() => navigation.toggleDrawer()}/>
      )
    })
  
   
  }, [])
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>

      <Button
        title="Ir Pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      {/* <Button
        title="Ir persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
      <Text style={{fontSize: 20, marginVertical: 20, marginLeft: 5}} >Navegar con Argumentos</Text>

      <View style={{flexDirection: 'row'}} >
        <TouchableOpacity
        style={{...styles.btn, backgroundColor: '#6638ef'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, name: 'Pedro'})
          }>
          <Text style={styles.btnTxt}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{...styles.btn, backgroundColor: '#5cc9f5'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, name: 'Maria'})
          }>
          <Text style={styles.btnTxt}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
