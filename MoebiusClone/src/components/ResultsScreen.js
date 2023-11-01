import React from 'react';
import { View, Text } from 'react-native';
import Export from '../utils/Export';

export default function ResultsScreen() {
  const exportData = () => {
    Export.exportResults();
  };

  return (
    <View>
      <Text>Results Screen</Text>
      <Button title="Export Results" onPress={exportData} />
    </View>
  );
}
