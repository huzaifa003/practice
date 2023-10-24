import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'


import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
import Dashboard from './Dashboard';

const Home = () => {
    const [logged, setLogged] = useState(false);
    const Stack = createStackNavigator();
    const navigation = useNavigation()
    useEffect(()=>{
        async function check(){
            const response = await AsyncStorage.getItem("logged");
            if (response == null){
                setLogged(false);
                navigation.navigate("Login")
            }
            else{
                navigation.navigate("Dashboard")
            }
        }

        check()
    })
    return (
        <>
            
        </>
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

export default Home