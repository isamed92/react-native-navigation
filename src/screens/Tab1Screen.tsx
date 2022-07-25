import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colors, styles } from '../theme/appTheme';



export const Tab1Screen = () => {


  useEffect(() => {
    console.log('calling to tab1screen')
  
    
  }, [])
  
  return (
    <View style={styles.globalMargin} >
      <Text style={styles.title} >Iconos</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="bug-outline" size={80} color={colors.primary} />
        <Icon name="cut-outline" size={80} color={colors.primary} />
        <Icon name="star-outline" size={80} color={colors.primary} />
        <Icon name="water-outline" size={80} color={colors.primary} />
        <Icon name="aperture-outline" size={80} color={colors.primary} />
      </View>
    </View>
  )
}