import { View, SafeAreaView, Alert, Image, StyleSheet } from 'react-native';
import React from 'react';
import {
    Backdrop,
    BackdropSubheader,
    AppBar,
    IconButton,
    Button,
    Stack,
    Text,
} from "@react-native-material/core";
import CustomButton from '../components/common/CustomButton';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import CustomBtn from '../components/common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoardingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../assets/onboard.png')}
                style={{
                    marginTop: 50,
                }}
                />
                <View style={styles.textContainer}>
                    <Text variant="h4" style={styles.title}>
                        Tantorial
                    </Text>
                    <Text variant="h5" style={styles.subtitle}>
                        Connect to the best tutors closest to you
                    </Text>
                    <Text variant="h5" style={styles.subtitle}>
                        Let's get started
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomBtn
                        label="I am a Student"
                        onPress={() => AsyncStorage.setItem("onboard", "true")}
                    />
                    <CustomBtn
                        label="I am a Tutor"
                        onPress={() => AsyncStorage.setItem("onboard", "true")}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4d892',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: '500',
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default OnBoardingScreen;
