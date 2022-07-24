import {Button, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text  style={styles.title}>Page1Screen</Text>

      <Button
        title="Ir Pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      {/* <Button
        title="Ir persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
      <Text>Navegar con Argumentos</Text>

      <TouchableOpacity
          onPress={() => navigation.navigate('PersonaScreen', {id: 1, name: 'Pedro'})}
        >
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  );
};
