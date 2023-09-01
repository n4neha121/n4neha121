import {useState} from 'react';
import {Text, View, Button} from 'react-native';
export const Props = () => {
  const [name, setName] = useState('neha');
  return (
    <View>
      <Text style={{fontSize: 30}}>props accessing</Text>
      <Button title="Update props" onPress={() => setName('rysa')} />
      <User name={name} />
    </View>
  );
};
const User = props => {
  return (
    <View style={{backgroundColor: 'green', padding: 10}}>
      <Text style={{fontSize: 30}}>{props.name}</Text>
    </View>
  );
};

export default Props;
