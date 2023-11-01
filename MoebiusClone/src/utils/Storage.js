import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
  saveModel: async (model) => {
    try {
      await AsyncStorage.setItem('model', model);
    } catch (error) {
      console.error('Error saving model:', error);
    }
  },
};

export default Storage;
