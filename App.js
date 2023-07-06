import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import { AuthProvider } from './src/context/auth-context';
import TabNavigator from './src/navigation/TabNavigator';
import { Tab } from '@rneui/base';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const onboard = AsyncStorage.getItem('onboard')
  return (
      <NavigationContainer>
        {
          onboard == "true" ? <OnBoardingScreen /> : <TabNavigator />
        }
      </NavigationContainer>
  );
}

