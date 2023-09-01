import {Text, View, StyleSheet} from 'react-native';

const userdata = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'black',
    margin: 2,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    textAlign: 'center',
  },
});
