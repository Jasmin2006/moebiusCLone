import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SimulationScreen() {
  const simulate = () => {
    // Implement simulation logic here
  };

  return (
    <View>
      <Text>Simulation Screen</Text>
      <Button title="Simulate" onPress={simulate} />
    </View>
  );
}
