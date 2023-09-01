import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
const Forms = () => {
  const [name, setName] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    if (name && selectedGender) {
      setSubmit(true);

      setName('');
      setSelectedGender(null);
    } else {
      alert('Please select a gender and enter your name before submitting.');
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {!submit ? (
        <>
          <Text>Enter your name:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              width: 200,
              padding: 8,
              marginBottom: 20,
            }}
            onChangeText={text => setName(text)}
            value={name}
          />

          <Button
            style={styles.stybut}
            title="Male"
            color={selectedGender === 'male' ? 'green' : 'blue'}
            onPress={() => setSelectedGender('male')}
          />

          <Button
            style={styles.stybut}
            title="Female"
            color={selectedGender === 'female' ? 'pink' : 'blue'}
            onPress={() => setSelectedGender('female')}
          />

          <Button style={styles.stybut} title="Submit" onPress={handleSubmit} />
        </>
      ) : (
        <Text>
          {name}! Your form is submitted Successfully {selectedGender}.
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  stybut: {
    margin: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Forms;
