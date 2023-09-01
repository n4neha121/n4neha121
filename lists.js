import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList, Image} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (name && gender) {
      setData([...data, {name, gender}]);
      setName('');
      setGender('');
    }
  };

  return (
    <View style={{padding: 20}}>
      <Text>Name:</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text>Gender:</Text>
      <TextInput
        placeholder="Enter your gender"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <Button
        style={{color: 'orange', borderColor: '#fff'}}
        title="Male"
        color={gender === 'Male' ? 'green' : 'lightgreen'}
        onPress={() => setGender('Male')}
      />

      <Button
        style={{color: 'orange', borderColor: '#fff'}}
        title="Female"
        color={gender === 'Female' ? 'lightblue' : 'lightgreen'}
        onPress={() => setGender('Female')}
      />

      <Button title="submit" style={{color: 'black'}} onPress={handleSubmit} />

      <Text>Submitted Data:</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Gender: {item.gender}</Text>
            <Text>
              {name}! Your form is submitted Successfully {gender}.
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default App;
