import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Grid = () => {
  return (
    <View>
      <Text style={{fontSize: 35}}>Grid with dynamic data</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={styles.item}>neha</Text>
        <Text style={styles.item}>neha</Text>
        <Text style={styles.item}>neha</Text>
        <Text style={styles.item}>neha</Text>
        <Text style={styles.item}>neha</Text>
        <Text style={styles.item}>neha</Text>
        <Text style={styles.item}>neha</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'red',
    padding: 10,
    color: '#fff',
    fontSize: 30,
    margin: 10,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
export default Grid;
