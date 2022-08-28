import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react'
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';



interface Props {
    icon: string
}
export const IconButton = ({icon}: Props) => {


    const {changeFavoriteIcon} = useContext(AuthContext)
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(icon)}>
        <Icon name={icon} size={80} color={colors.primary}/>
    </TouchableOpacity>
  )
}

