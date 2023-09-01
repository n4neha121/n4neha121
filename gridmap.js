import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
export const Gridmap = () => {
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
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 7,
      name: 'sunny',
    },
    {
      id: 7,
      name: 'sunny',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 35}}>Grid with dynamic data</Text>
      <ScrollView style={{marginBottom: 60}}>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {users.map(item => (
            <Text style={styles.item}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'yellow',
    padding: 5,
    color: 'black',
    fontSize: 20,
    margin: 5,
    height: 110,
    width: 110,
    borderColor: 'blue',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
export default Gridmap;
