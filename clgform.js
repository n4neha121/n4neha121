import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
export const Clgform = () => {
  const [studentname, setStudentname] = useState('');
  const [studentBranch, setStudentbranch] = useState('');
  const [studentcgpa, setCgpa] = useState('');

  const submit = () => {
    console.log('student name', setStudentname);
    console.log('student Branch', setStudentbranch);
    console.log('student cgpa', setCgpa);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Student Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={studentname}
        onChangeText={setStudentname}
      />
      <Text style={styles.label}>Student Branch</Text>
      <TextInput
        style={styles.input}
        placeholder="Branch"
        value={studentBranch}
        onChangeText={setStudentbranch}
      />
      <Text style={styles.label}>Student cgpa</Text>
      <TextInput
        style={styles.input}
        placeholder="cgpa"
        value={studentcgpa}
        onChangeText={setCgpa}
      />
      <Button title="Submit" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 20,
    marginBottom: 15,
    color: 'lightblue',
    backgroundColor: 'blue',
  },
  label: {
    marginBottom: 20,
    marginTop: 20,
  },
});
export default Clgform;
