import React from 'react';
import {Text, View} from 'react-native';
export const Props = () => {
  let name = 'Neha';
  return (
    <View>
      <Text style={{fontSize: 20}}>props accessing </Text>
      <Button titl
      <User name={name} />
    </View>
  );
};
const User = props => {
  return (
    <View style={{backgroundColor: 'green', padding: 5}}>
      <Text style={{fontSize: 50}}>{props.name} </Text>
    </View>
  );
};
export default Props;
