import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';

const Login = () => {
    const navigation = useNavigation();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const login = async ()=>{
        try {
            const data = await AsyncStorage.getItem(username);
            if (data == null){
                setError("User Doesn't Exist");
            }
            else{
                const res = await AsyncStorage.setItem("logged", username);
                const log  = await AsyncStorage.getItem("logged");
                if (log != null){
                    console.log(log);
                    const data = await AsyncStorage.getItem(username);
                    const parsed = JSON.parse(data);

                    if (parsed.password == password){
                        navigation.navigate("Dashboard");
                    }
                    else{
                        setError("Wrong Passowrd")
                    }
                    
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text> {error} </Text>
            <Text>This is a Signin Screen</Text>

            

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

            <TouchableOpacity onPress={login} style={styles.button}>
                <Text style={{ color: 'white' }}>Sign In </Text>
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}} style={styles.button}>
                <Text style={{ color: 'white' }}>Create Account </Text>
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
        borderRadius: 25,
    },
});


export default Login