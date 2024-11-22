import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { Link } from "expo-router";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username && password) {
            // The user must be able to enter their username and password for them to be able to login successfully//
            Alert.alert("Login Successful", `Welcome back, ${username}!`);
        } else {
            // It will be a reminder for the user to enter their login creditials for them to be successfully loged in//
            Alert.alert("Error", "Please fill in all fields.");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.input} placeholder="Username" placeholderTextColor={"#aaa"} value={username} onChangeText={setUsername} />
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"#aaa"} value={password} onChangeText={setPassword} secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Link href="/CourseDetails" style={styles.link}>
                    <Text style={styles.buttonText}>Log In</Text>
                </Link>
            </TouchableOpacity>
            <Link href="/+not-found" style={styles.link}>
                <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: '#fff',
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    link: {
        marginTop: 20,
    },
    linkText: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
})
