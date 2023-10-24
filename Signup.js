import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const signup = async ()=>{
        try {
            const prev = await AsyncStorage.getItem(username);
            if (prev !== null)
            {
                setError("User Already exists");
                return;
            }
            console.log(username, password);
            const res = await AsyncStorage.setItem(username, JSON.stringify({"username": username, "password": password, "bg": 'white'}))
            const data = await AsyncStorage.getItem(username);
            console.log(data)
            console.log("Username saved")
            navigation.navigate("Login");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> {error} </Text>
            <Text>This is a Signup Screen</Text>

            

            <TextInput
                placeholder="Enter username"
                style = {styles.input}
                value={username}
                onChangeText={setUsername}
            >
            </TextInput>

            <TextInput
                placeholder="Enter password"
                style = {styles.input}
                value={password}
                onChangeText={setPassword}
            >
            </TextInput>

            <TouchableOpacity onPress={signup} style={styles.button}>
                <Text style={{ color: 'white' }}>Sign Up </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("Login")}} style={styles.button}>
                <Text style={{ color: 'white' }}>Already have an account? Login </Text>
            </TouchableOpacity>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
    },
});


export default Signup