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

import AdaptiveIcon from '../../assets/images/adaptive-icon.png';
import { Image } from 'expo-image';
import GoogleSVG from '../../assets/images/misc/google.svg';
import FacebookSVG from '../../assets/images/misc/facebook.svg';
import TwitterSVG from '../../assets/images/misc/twitter.svg';

import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import CustomSVG from '../../components/CustomSVG';
import { registerUser } from '../../context/actions/auth';

import RegistrationSVG from '../../assets/images/misc/registration.svg';
import { Alert } from 'react-native';
const RegisterScreen = ({ navigation }) => {
  const [submit, setSubmit] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [tutor, setTutor] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      navigation.navigate('Login')
      setSubmit(false);
      setSubmitError(null);
    } catch (err) {
      Alert.alert("Registration Failed", err.message);
      console.log(err);
      setSubmitError(err.message);  // set the error message in the state
      setSubmit(false)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25,
              paddingVertical: 25,
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
            textAlign: 'center',
          }}>
          Register
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={GoogleSVG}
            placeholder="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
            transition={1000}
          />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={FacebookSVG}
            placeholder="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
            transition={1000}
          />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={TwitterSVG}
            placeholder="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
            transition={1000}
          />
          </TouchableOpacity>
        </View>

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, register with email ...
        </Text>
        <InputField
          label={'First Name'}
          icon={
            <MaterialIcons
              name="person-outline"
              size={25}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          fieldValue={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <InputField
          label={'Last Name'}
          icon={
            <MaterialIcons
              name="person-outline"
              size={25}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          fieldValue={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <InputField
          label={'Phone Number'}
          keyboardType={'phone-pad'}
          icon={
            <Ionicons
              name="call-outline"
              size={25}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          fieldValue={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={25}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
          fieldValue={email}
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={25}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldValue={password}
          onChangeText={(text) => setPassword(text)}
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={25}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldValue={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <CustomButton label={'Register'} onPress={handleSubmit} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
