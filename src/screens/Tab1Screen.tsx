import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colors, styles } from '../theme/appTheme';
import { IconButton } from '../components/IconButton';



export const Tab1Screen = () => {


  useEffect(() => {
    console.log('calling to tab1screen')
  
    
  }, [])
  
  return (
    <View style={styles.globalMargin} >
      <Text style={styles.title} >Iconos</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <IconButton icon="airplane-outline"/>
        <IconButton icon="bug-outline"/>
        <IconButton icon="cut-outline"/>
        <IconButton icon="star-outline"/>
        <IconButton icon="water-outline"/>
        <IconButton icon="aperture-outline"/>
      </View>
    </View>
  )
}