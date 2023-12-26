import React, { useEffect, useState, useContext } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image,
} from 'react-native';
import { ActivityIndicator } from "@react-native-material/core";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/common/CustomButton';
import InputField from '../../components/common/InputField';
import { loginUser } from '../../context/actions/auth';
import { useAuth } from '../../context/auth-context';
import { TextInput } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setSubmit(true);
        try {
            const userData = {
                email: email,
                password: password,
            };
            const decoded = await loginUser(userData);
            Alert.alert("Login Success");   // Alert for success
            navigation.navigate('Home');
            setSubmit(false);
            setError(null);
        } catch (err) {
            setError(err.message);  // Set the error message in the state
            Alert.alert("Login Error", "Password or Email is incorrect");
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
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/auth.png')}
                        style={{ marginBottom: 20 }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: '600',
                        color: '#333',
                        textAlign: 'center',
                        marginBottom: 20,
                    }}
                >
                    Login
                </Text>
                <InputField
                    label="Email ID"
                    icon="email"
                    keyboardType="email-address"
                    fieldValue={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <InputField
                    label="Password"
                    inputType="password"
                    icon={password ? 'lock' : 'lock-outline'}
                    fieldValue={password}
                    onChangeText={(text) => setPassword(text)}
                    fieldButtonLabel="Forgot Password?"
                    fieldButtonFunction={() => Alert.alert("Forget Password")}
                />
                <CustomButton label="Login" onPress={handleSubmit} />
                <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                    Or, login with ...
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}
                >
                    <Text>New to the app? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
