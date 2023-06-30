import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/authentication/LoginScreen'
import RegisterScreen from '../screens/authentication/RegisterScreen'
import ConfirmScreen from '../screens/authentication/ConfirmScreen'

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack