import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
export class Comp extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: 'red'}}>class component</Text>
        <TextInput placeholder="Enter your Name" />
        <Button title="Press me" />
      </View>
    );
  }
}
export default Comp;
