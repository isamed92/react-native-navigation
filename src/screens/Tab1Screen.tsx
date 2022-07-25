import { Text, View } from 'react-native'
import React, { useEffect } from 'react'

export const Tab1Screen = () => {


  useEffect(() => {
    console.log('calling to tab1screen')
  
    
  }, [])
  
  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  )
}