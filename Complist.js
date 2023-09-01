import React from 'react';
import {Text, View, FlatList} from 'react-native';
import userdata from './components/userdata';
export const Complist = () => {
  const users = [
    {
      id: 1,
      name: 'neha',
      email: 'ngfshj12.com',
    },
    {
      id: 2,
      name: 'riya',
      email: 'riya12.com',
    },
    {
      id: 3,
      name: 'babu',
      email: 'babusg12.com',
    },
    {
      id: 4,
      name: 'goli',
      email: 'goli88898.com',
    },
    {
      id: 5,
      name: 'anshu',
      email: 'ansh556.com',
    },
    {
      id: 6,
      name: 'sunny',
      email: 'sun45dkj.com',
    },
    {
      id: 7,
      name: 'kdjh',
      email: 'nfkd2gmail.com',
    },
    {
      id: 8,
      name: 'abcd',
      email: 'abcd2233.com',
    },
    {
      id: 9,
      name: 'sunny',
      email: 'abcd2233.com',
    },
    {
      id: 10,
      name: 'sunny',
      email: 'nfkd2gmail.com',
    },
    {
      id: 11,
      name: 'sunny',
      email: 'nfkd2gmail.com',
    },
    {
      id: 7,
      name: 'sunny',
      email: 'nfkd2gmail.com',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 35}}>component in flatlist</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <userdata item={item} />}
      />
    </View>
  );
};
export default Complist;
