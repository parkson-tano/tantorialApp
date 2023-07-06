import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
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
                    paddingBottom: 8,
                    marginBottom: 10,
                    marginTop: 15,
                }}>
                {inputType === 'password' ? (

                    <TextInput
                        mode="outlined"
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0 }}
                        secureTextEntry={!passwordVisible}
                        left={<TextInput.Icon icon={icon} />}
                        
                        right={<TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
                        onChangeText={onChangeText}
                        value={fieldValue}
                    />
                ) : (
                    <TextInput
                        mode="outlined"
                        left={<TextInput.Icon icon={icon} />}
                        placeholder={label}
                        keyboardType={keyboardType}
                        style={{ flex: 1, paddingVertical: 0 }}
                        onChangeText={onChangeText}
                        value={fieldValue}
                    />
                )}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                {fieldButtonLabel && (
                    <TouchableOpacity onPress={fieldButtonFunction}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700', marginBottom: 35 }}>
                            {fieldButtonLabel}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );

}
