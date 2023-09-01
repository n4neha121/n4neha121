import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
export const Texts = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 35, color: 'red'}}>handle text</Text>
      <Text style={{fontSize: 35}}>your name is:{name}</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter your name"
        onChangeText={text => setName(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textinput: {
    borderColor: '#fff',
    borderWidth: 2,
    fontSize: 30,
    margin: 10,
    color: 'blue',
  },
});
export default Texts;
