import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const Schoolform = () => {
  const [studentname, setStudentname] = useState('');
  const [grade, setGrade] = useState('');

  const submit = () => {
    console.log('Student name:', setStudentname);
    console.log('Student grade:', setGrade);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Student name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter student name"
        value={studentname}
        onChangeText={setStudentname}
      />
      <Text style={styles.label}>Grade</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Grade"
        value={grade}
        onChangeText={setGrade}
      />
      <Button title="Submit" onPress={submit} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
  },
});

export default Schoolform;
