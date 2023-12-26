import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import ConfirmScreen from '../screens/auth/ConfirmScreen'

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