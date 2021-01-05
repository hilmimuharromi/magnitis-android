import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Step1, Step2, Step3 } from "@components/BeforeLogin"

const Stack = createStackNavigator();


const BeforeLogin = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="step1" component={Step1} />
            <Stack.Screen name="step2" component={Step2} />
            <Stack.Screen name="step3" component={Step3} />
        </Stack.Navigator>)

}

export default BeforeLogin