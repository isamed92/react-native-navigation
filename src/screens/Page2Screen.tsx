import { Button, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Page2Screen = () => {
  const navigator = useNavigation()

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras'
    })
  }, [])
  


  return (
    <View style={styles.globalMargin}>
      <Text  style={styles.title}>Page2Screen</Text>

      <Button title='Ir Pagina 3' onPress={() => navigator.navigate('Page3Screen')}/>
    </View>
  )
}

