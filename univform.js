import React, {useState} from 'react';
import {View, Text, TextInput, Button, Picker} from 'react-native';
const Universityform = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [selectedprogram, setprogram] = useState('');

  const programs = ['computer science', 'Engineering', 'Business'];

  const Submit = () => {
    if (Name && email && birthdate && selectedprogram) {
      console.log('form submitted successfully');
    } else {
      console.log('please fill in all fields');
    }
  };
  return (
    <View>
      <Text>Name</Text>
      <TextInput
        value={Name}
        onChangeText={setName}
        placeholder="Enter your name:"
      />
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email:"
        keyboardType="email-address"
      />
      <Text>Birthdate</Text>
      <TextInput
        value={birthdate}
        onChangeText={setBirthdate}
        placeholder="Enter your birthdate"
        keyboardType="numeric"
      />
      <Text>Select program</Text>
      <Picker
      selectedvalue={selectedprogram}
      onValuechange={(itemValue)=> setprogram(itemValue)}
      >
        <Picker.Item label
      </Picker>
    </View>
  );
};
