import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "@Screens/Home"
import LoginScreen from "@Screens/Login"
import RegisterScreen from "@Screens/Register"
import BeforeLoginScreen from "@Screens/BeforeLogin"

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="BeforeLoginScreen" component={BeforeLoginScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
}

export default Routes