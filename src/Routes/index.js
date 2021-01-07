import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "@Screens/Home"
import LoginScreen from "@Screens/Login"
import RegisterScreen from "@Screens/Register"
import BeforeLoginScreen from "@Screens/BeforeLogin"

const Stack = createStackNavigator();

const Routes = (props) => {
    const { dataUser} = props

    // useEffect(() => {
    //     if (dataUser) {
    //         console.log(dataUser, "data user before login")
    //         navigation.navigate("HomeScreen")
    //     }
    //     // eslint-disable-next-line
    // }, [dataUser])
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            {!dataUser ? 
            (<>
<Stack.Screen name="BeforeLoginScreen" component={BeforeLoginScreen} />
<Stack.Screen name="LoginScreen" component={LoginScreen} />
<Stack.Screen name="RegisterScreen" component={RegisterScreen} />

            </>) :             
            (<Stack.Screen name="HomeScreen" component={HomeScreen} />)
        }
        </Stack.Navigator>
    );
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