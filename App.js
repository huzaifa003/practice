import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Dashboard from './Dashboard';
import { FlatList } from 'react-native-gesture-handler';
import Product from './Product';
import Dishes from './Dishes';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>


      <Stack.Screen
          name="Dishes"
          component={Dishes}
          options={{
            headerShown: false
          }}
        />



      <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerShown: false
          }}
        />


        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />


        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}