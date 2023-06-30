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

import RegistrationSVG from '../../assets/images/misc/registration.svg';
const RegisterScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}>
          

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
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
        />

        {/* <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{ color: '#666', marginLeft: 5, marginTop: 5 }}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View> */}

        {/* <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}

        <CustomButton label={'Register'} onPress={() => { }} />

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
