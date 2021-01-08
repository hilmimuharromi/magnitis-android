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
import BottomTab from "@components/BottomTab"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = (props) => {
    const { dataUser } = props

    function ProfileScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>profile !</Text>
            </View>
        );
    }

    // function PendahuluanScreen() {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text>Pendahuluan!</Text>
    //         </View>
    //     );
    // }

    // function DaftarPustakaScreen() {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <Text>DaftarPustaka!</Text>
    //         </View>
    //     );
    // }

    const AfterLogin = () => {
        return (
            <>

                <Tab.Navigator
                    initialRouteName="Home"
                    tabBar={(props) => <BottomTab {...props} />}
                >
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Setting" component={SettingScreen} />
                </Tab.Navigator>
            </>

        )
    }



    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            {
                !dataUser ? (
                    <>
                        <Stack.Screen name="BeforeLoginScreen" component={BeforeLoginScreen} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    </>
                ) : (
                        <>
                            <Stack.Screen name="Main" component={AfterLogin} />
                            <Stack.Screen name="pendahuluan" component={PendahuluanScreen} />
                            <Stack.Screen name="daftarPustaka" component={DaftarPustakaScreen} />
                        </>
                    )
            }
        </Stack.Navigator>

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