import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signup = async ()=>{
        try {
            const res = AsyncStorage.setItem(username, JSON.stringify({"username": username, "password": password, "bg": 'white'}))
            console.log("Username saved")
        } catch (error) {
            
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

            <TouchableOpacity onPress={} style={styles.button}>
                <Text style={{ color: 'white' }}>Sign Up </Text>
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