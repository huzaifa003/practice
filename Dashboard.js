import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Dashboard = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is a Dashboard Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                    const res = await AsyncStorage.removeItem("logged"); navigation.reset({ index: 1, routes: [{ "name": 'Home' }] })

                }}
            >
                <Text>Logout</Text>
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

export default Dashboard