import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
const Forms = () => {
  const [name, setName] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>Enter your Name</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: 150,
          padding: 8,
          marginBottom: 20,
        }}
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button
        style={styles.item}
        title="Male"
        color={selectedGender === 'male' ? 'green' : 'lightblue'}
        onPress={() => setSelectedGender('male')}
      />
      <Button
        style={styles.item}
        title="Female"
        color={selectedGender === 'female' ? 'pink' : 'lightblue'}
        onPress={() => setSelectedGender('female')}
      />
      {selectedGender && (
        <Text>
          Hello, {name}! You selected {selectedGender}.
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    
    padding: 30,
    marginBottom: 20,
    
  },
  
});

export default Forms;
