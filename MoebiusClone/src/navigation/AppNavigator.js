import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ModelingScreen from '../components/ModelingScreen';
import SimulationScreen from '../components/SimulationScreen';
import ResultsScreen from '../components/ResultsScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Modeling" component={ModelingScreen} />
      <Tab.Screen name="Simulation" component={SimulationScreen} />
      <Tab.Screen name="Results" component={ResultsScreen} />
    </Tab.Navigator>
  );
}
