import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "@Screens/Home"
import LoginScreen from "@Screens/Login"
import RegisterScreen from "@Screens/Register"
import BeforeLoginScreen from "@Screens/BeforeLogin"
import SettingScreen from "@Screens/Setting"
import PendahuluanScreen from "@Screens/Pendahuluan"
import DaftarPustakaScreen from "@Screens/DaftarPustaka"
import GlosariumScreen from "@Screens/Glosarium"
import KIKDScreen from "@Screens/KIKD"
import ProfileScreen from "@Screens/Profile"
import PetaKonsep from "@Screens/PetaKonsep"
import Pembelajaran from "@Screens/Pembelajaran"


import BottomTab from "@components/BottomTab"
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Routes = (props) => {
    const { dataUser } = props

    const Main = () => {
        return (
            <>
                <Tab.Navigator
                    initialRouteName="Home"
                    tabBar={(props) => <BottomTab {...props} />}
                >
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                    <Tab.Screen name="Home" component={MenuScreen} />
                    <Tab.Screen name="Setting" component={SettingScreen} />
                </Tab.Navigator>
            </>
        )
    }

    function MenuScreen() {
        return (
            <HomeStack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Pendahuluan" component={PendahuluanScreen} />
                <Stack.Screen name="Glosarium" component={GlosariumScreen} />
                <Stack.Screen screenOptions={{ headerShown: true }} name="Daftar Pustaka" component={DaftarPustakaScreen} />
                <Stack.Screen name="ki_kd" component={KIKDScreen} />
                <Stack.Screen name="Peta Konsep" component={PetaKonsep} />
                <Stack.Screen name="Pembelajaran" component={Pembelajaran} />
            </HomeStack.Navigator>
        );
    }




    return (
        <>
            {
                !dataUser ? (
                    <Stack.Navigator
                        screenOptions={{ headerShown: false }}
                    >
                        <Stack.Screen name="BeforeLoginScreen" component={BeforeLoginScreen} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    </Stack.Navigator>
                )
                    :
                    (
                        <Stack.Navigator
                            screenOptions={{ headerShown: false }}
                        >
                            <Stack.Screen name="Main" component={Main} />
                        </Stack.Navigator>

                    )
            }
        </>
    )
}



const mapStateToProps = state => {
    const { user } = state;
    const { data, loading } = user
    return {
        dataUser: data,
        loading
    };
}
const mapDispatchToProps = {
    // SetUser,
    // SetLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
// export default Routes