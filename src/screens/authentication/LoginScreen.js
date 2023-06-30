import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import loginSVG from '../../assets/images/misc/login.svg';
import GoogleSVG from '../../assets/images/misc/google.svg';
import FacebookSVG from '../../assets/images/misc/facebook.svg';
import TwitterSVG from '../../assets/images/misc/twitter.svg';
import AdaptiveIcon from '../../assets/images/adaptive-icon.png';
import { Image } from 'expo-image';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import CustomSVG from '../../components/CustomSVG';

const LoginScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center', marginBottom: 30 }}>
                    <Image
                        style={{
                            width: "100%",
                            height: 200,
                        }}
                        source={AdaptiveIcon}
                        placeholder="https://picsum.photos/seed/696/3000/2000"
                        contentFit="cover"
                        transition={1000}
                    />
                </View>


                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: 30,
                        textAlign: 'center',
                    }}>
                    Login
                </Text>

                <InputField
                    label={'Email ID'}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
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
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"
                    fieldButtonLabel={"Forgot?"}
                    fieldButtonFunction={() => { }}
                />

                <CustomButton label={"Login"} onPress={() => { }} />

                <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                    Or, login with ...
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
                            style={{ width: 50, height: 50 }}
                            source={GoogleSVG}
                            placeholder="https://picsum.photos/seed/696/3000/2000"
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
                            style={{ width: 50, height: 50 }}
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
                            source={TwitterSVG}
                            style={{ width: 50, height: 50 }}
                            placeholder="https://picsum.photos/seed/696/3000/2000"
                            contentFit="cover"
                            transition={1000}
                        />

                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
