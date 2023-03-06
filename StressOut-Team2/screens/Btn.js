import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 25,
        alignItems: 'center',
        width: 350,
        height: 70,
        paddingVertical: 10,
        marginVertical: 35,
        justifyContent: 'center',

      }}>
      <Text
        style={{
          color: textColor,
          fontSize: 35,
          fontWeight: 'bold',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
