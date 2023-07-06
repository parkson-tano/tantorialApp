import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
    AppBar,
    Stack,
    ActivityIndicator,
    Button,
    FAB,
    IconButton,
} from "@react-native-material/core";
export default function CustomBtn({ label, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '#fff',
                padding: 15,
                paddingHorizontal: 40,
                borderRadius: 10,
                marginBottom: 20,
            }}>

            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 20,
                }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}
