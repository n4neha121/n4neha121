import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
export const Map = () => {
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
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 8,
      name: 'sunny',
    },
    {
      id: 9,
      name: 'sunny',
    },
    {
      id: 10,
      name: 'sunny',
    },
    {
      id: 11,
      name: 'sunny',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>List using map function</Text>
      <ScrollView style={{marginBottom: 60}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    padding: 10,
    backgroundColor: 'blue',
    color: '#fff',
    margin: 10,
    borderWidth: 2,
  },
});
export default Map;
