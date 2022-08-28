import { Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//     id: number;
//     name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}



export const PersonaScreen = ({navigation, route}: Props) => {
    const params = route.params
    // const params = route.params as RouteParams
    const {cambiarUsuario} = useContext(AuthContext)

    useEffect(() => {
      navigation.setOptions({
        title: params.name
      })
    }, [])
    useEffect(() => {
      cambiarUsuario(params.name)
    

    }, [])
    


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{
        JSON.stringify(params, null, 3)
      }</Text>
    </View>
  )
}

