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
export default function CustomButton({ label, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '#AD40AF',
                padding: 15,
                borderRadius: 10,
                marginBottom: 30,
            }}>
                
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    
                    fontSize: 25,
                    color: '#fff',
                }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}
