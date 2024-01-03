import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/common/CustomButton';
import InputField from '../../components/common/InputField';
import CustomSVG from '../../components/common/CustomSVG';
import { registerUser } from '../../context/actions/auth';

import RegistrationSVG from '../../assets/images/misc/registration.svg';
import { Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [submit, setSubmit] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tutor, setTutor] = useState(false);

  const handleSubmit = async () => {
    setSubmit(true);
    try {
      const userData = {
        email: email,
        password: password,
        phone_number: phoneNumber,
        tutor: false,
        verify: false,
        first_name: firstName,
        last_name: lastName,
      };
      const decoded = await registerUser(userData);
      Alert.alert('Registration Success'); // Alert for success
      navigation.navigate('Login');
      setSubmit(false);
      setSubmitError(null);
    } catch (err) {
      Alert.alert('Registration Failed', err.message);
      console.log(err);
      setSubmitError(err.message); // Set the error message in the state
      setSubmit(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 25,
          paddingVertical: 25,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
            textAlign: 'center',
          }}
        >
          Register
        </Text>
        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, register with email ...
        </Text>
        <InputField
          label="First Name"
          icon="account"
          fieldValue={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <InputField
          label="Last Name"
          icon="account"
          fieldValue={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <InputField
          label="Phone Number"
          keyboardType="phone-pad"
          icon="phone"
          fieldValue={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <InputField
          label="Email ID"
          icon="email"
          keyboardType="email-address"
          fieldValue={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputField
          label="Password"
          icon="lock"
          inputType="password"
          fieldValue={password}
          onChangeText={(text) => setPassword(text)}
        />
        <InputField
          label="Confirm Password"
          icon="lock"
          inputType="password"
          fieldValue={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <CustomButton label="Register" onPress={handleSubmit} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <Text>Already registered? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
