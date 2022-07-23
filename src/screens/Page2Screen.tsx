import { Button, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Page2Screen = () => {
  const navigator = useNavigation()


  return (
    <View style={styles.globalMargin}>
      <Text>Page2Screen</Text>

      <Button title='Ir Pagina 3' onPress={() => navigator.navigate('Page3Screen')}/>
    </View>
  )
}

