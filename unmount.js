import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
const Unmounts = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30}}>useEffect for unmount component</Text>
      <Button title="toggle" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
};
const Student = () => {
  let timer = setInterval(() => {
    console.log('Timer called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });
  return (
    <View>
      <Text style={{fontSize: 35, color: 'red'}}>student</Text>
    </View>
  );
};
export default Unmounts;
