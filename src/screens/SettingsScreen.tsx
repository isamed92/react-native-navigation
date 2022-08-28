import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {
        authState.favoriteIcon && ( 
          <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
        )
      }
    </SafeAreaView>
  );
};
