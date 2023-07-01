import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import { AuthProvider } from './src/context/auth-context';
import TabNavigator from './src/navigation/TabNavigator';
import { Tab } from '@rneui/base';

export default function App() {
  return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
  );
}

