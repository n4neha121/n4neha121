import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Exstyles from './styles';
const Style = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'blue'}}>style in react native</Text>
      <Text style={styles.textBox}>style in react native</Text>
      <Text style={styles.textBox}>style in react native</Text>
      <Text style={styles.textBox}>style in react native</Text>
      <Text style={Exstyles.textBox}>style in react native</Text>
      <Text style={Exstyles.textBox}>style in react native</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textBox: {
    color: '#fff',
    fontsize: 25,
    backgroundColor: 'blue',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: 'green',
  },
});
export default Style;
