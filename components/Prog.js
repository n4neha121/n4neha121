import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
export const Prog = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Hello');
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30}}>Life cycle with useEffect{count}</Text>
      <Button title="Update count" onPress={() => setCount(count + 1)} />
    </View>
  );
};
export default Prog;
