import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
export const usestate = () => {
  const [name, setName] = useState('Neha');
  function testname() {
    setName('hjiofepc');
  }
  return (
    <View>
      <Text style={{fontSize: 50}}>{name}</Text>
      <Button title="update name" onPress={testname} />
    </View>
  );
};
export default usestate;
