import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function InputField({
    label,
    icon,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction,
    onChangeText,
    fieldValue,
}) {
    const [passwordVisible, setPasswordVisible] = useState(true);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 20,
                    marginTop: 35,
                }}>
                {icon}
                {inputType === 'password' ? (
                    <TextInput
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0 }}
                        secureTextEntry={!passwordVisible}
                        onChangeText={onChangeText}
                        value={fieldValue}
                    />
                ) : (
                    <TextInput
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0 }}
                        onChangeText={onChangeText}
                        value={fieldValue}
                    />
                )}
                {inputType === 'password' && (
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons
                            name={passwordVisible ? 'ios-eye-off' : 'ios-eye'}
                            size={25}
                            color="#666"
                            style={{ marginLeft: 5 }}
                        />
                    </TouchableOpacity>
                )}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                {fieldButtonLabel && (
                    <TouchableOpacity onPress={fieldButtonFunction}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700', marginBottom:35 }}>
                            {fieldButtonLabel}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );

}
