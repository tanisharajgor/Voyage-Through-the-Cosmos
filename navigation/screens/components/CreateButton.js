import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@rneui/themed';

export default function CreateButton({ buttonText, iconName, onPress }) {
  return (
    <Button
      style={{ width: 200 }}
      title={buttonText}
      icon={{
        name: iconName,
        type: 'font-awesome',
        size: 15,
        color: 'white',
      }}
      iconRight
      iconContainerStyle={{ marginLeft: 10 }}
      titleStyle={{ fontWeight: '700' }}
      buttonStyle={{
        backgroundColor: '#004aad',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
      }}
      containerStyle={{
        width: 200,
        marginHorizontal: 80,
        marginVertical: 10,
      }}
      onPress = {() => onPress()}
    />
  );
}
