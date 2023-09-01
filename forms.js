import React from 'react';
import {View, Text, Button} from 'react-native';
export const Forms = () => {
  const Fruit = () => {
    console.log('apple');
  };
  return (
    <View>
      <Text>button taking</Text>
      <Button title="Onpress1" onPress={() => Fruit()} color={'Black'} />
      <Button title="Onpress2" onPress={Fruit} color={'green'} />
    </View>
  );
};
export default Forms;
