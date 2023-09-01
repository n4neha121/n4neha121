import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
export const Hook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.log('use count');
  }, [count]);
  useEffect(() => {
    console.log('gjhgkfe');
  }, [data]);

  return (
    <View>
      <Text style={{fontSize: 30}}>
        {data}useEffect as componentdidupdate{count}
      </Text>
      <Button title="update counter" onPress={() => setCount(count + 1)} />
      <Button title="update data" onPress={() => setData(data + 1)} />
      <User info={{data, count}} />
    </View>
  );
};
const User = props => {
  useEffect(() => {
    console.log('bfhckj,owiexixeuuivkwxm');
  }, [props.info.data]);

  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>
        data:{props.info.data}
      </Text>
      <Text style={{fontSize: 30, color: 'orange'}}>
        count:{props.info.count}
      </Text>
    </View>
  );
};

export default Hook;
