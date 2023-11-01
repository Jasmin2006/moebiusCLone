import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Storage from '../utils/Storage';

export default function ModelingScreen() {
  const [model, setModel] = useState('');
  
  const saveModel = () => {
    Storage.saveModel(model);
  };

  return (
    <View>
      <Text>Modeling Screen</Text>
      <TextInput
        placeholder="Enter your model"
        value={model}
        onChangeText={(text) => setModel(text)}
      />
      <Button title="Save Model" onPress={saveModel} />
    </View>
  );
}
