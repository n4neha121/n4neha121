import React from 'react';
import {Text, View, Sectionlist} from 'react-native';
export const Sectionlists = () => {
  const users = [
    {
      id: 1,
      name: 'neha',
      data: ['java', 'c++', 'python'],
    },
    {
      id: 2,
      name: 'riyu',
      data: ['javascript', 'react js', 'angular'],
    },
    {
      id: 1,
      name: 'summy',
      data: ['jquery', 'laravel', 'c#'],
    },
    {
      id: 1,
      name: 'abhi',
      data: ['reactnative', 'wordpress', 'php'],
    },
  ];
  return (
    <View>
      <Text style={{fontsize: 30}}>sectionlist in react native</Text>
      <Sectionlist
        sections={users}
        renderItem={({item}) => <Text style={{fontSize: 30}}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 30, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
};
export default Sectionlists;
