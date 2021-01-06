import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { Step1, Step2, Step3 } from "@components/BeforeLogin"

const Stack = createStackNavigator();


const BeforeLogin = (props) => {
    const { dataUser, navigation } = props

    useEffect(() => {
        if (dataUser) {
            console.log(dataUser, "data user")
            navigation.navigate("HomeScreen")
        }
        // eslint-disable-next-line
    }, [dataUser])
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="step1" component={Step1} />
            <Stack.Screen name="step2" component={Step2} />
            <Stack.Screen name="step3" component={Step3} />
        </Stack.Navigator>)

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

export default connect(mapStateToProps, mapDispatchToProps)(BeforeLogin);