import {Text, View} from 'react-native';
import React, {useEffect} from 'react';

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('calling to tab3screen');
  }, []);
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
};
