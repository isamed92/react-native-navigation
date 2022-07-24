import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}


export const PersonaScreen = ({navigation, route}: Props) => {
    const params = route.params;

    useEffect(() => {
      navigation.setOptions({
        title: params!.name
      })
    }, [])
    


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{
        JSON.stringify(params, null, 3)
      }</Text>
    </View>
  )
}
