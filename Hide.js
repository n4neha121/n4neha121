import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
const Hide = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text style={{fontSize: 30}}>Show hide component</Text>
      <Button title="show component" onPress={() => setShow(true)} />
      <Button title="hide component" onPress={() => setShow(false)} />
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>User component</Text>
    </View>
  );
};
export default Hide;
