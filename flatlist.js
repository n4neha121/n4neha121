import React from 'react';
import {Text, View, StyleSheet, Flatlist} from 'react-native';
export const Flatlists = () => {
  const users = [
    {
      id: 1,
      name: 'neha',
    },
    {
      id: 2,
      name: 'riya',
    },
    {
      id: 3,
      name: 'babu',
    },
    {
      id: 4,
      name: 'goli',
    },
    {
      id: 5,
      name: 'anshu',
    },
    {
      id: 6,
      name: 'sunny',
    },
  ];
  return (
    <View>
      <Text>Flat list components</Text>
      <Flatlist
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    backgroundColor: 'red',
    borderColor: 'green',
    padding: 10,
    color: '#fff',
    borderWidth: 1,
    margin: 10,
  },
});
export default Flatlists;
