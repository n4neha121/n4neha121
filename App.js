import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';
export const Simpleform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormsubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Submit" onPress={handleFormsubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 80,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 10,
  },
});
export default Simpleform;
