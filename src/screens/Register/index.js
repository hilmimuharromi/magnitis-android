
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';


const RegisterScreen = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#B89AD3' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: "#fff"
                }]}
            >
                <Image
                    style={styles.imageStep}
                    source={
                        require("@assets/magnitis.png")} />
                <View>
                    <View style={styles.layoutInput}>
                        <Icon size={30} color="#B89AD3" active type="FontAwesome" name="user" />
                        <TextInput style={styles.input} placeholder="Name" />
                    </View>
                    <View style={styles.layoutInput}>
                        <Icon size={30} color="#B89AD3" active type="FontAwesome" name="envelope" />
                        <TextInput style={styles.input} keyboardType="email-address" placeholder="Email" />
                    </View>
                    <View style={styles.layoutInput}>
                        <Icon color="#B89AD3" size={35} active type="FontAwesome" name="lock" />
                        <TextInput style={styles.input} secureTextEntry={hidePassword} placeholder="Password" />
                        {hidePassword ?
                            <Icon color="#000" size={30} type="FontAwesome" name="eye-slash" onPress={() => setHidePassword(false)} /> :
                            <Icon color="#B89AD3" size={30} type="FontAwesome" name="eye" onPress={() => setHidePassword(true)} />
                        }
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.text_footer}> Register </Text>
                </TouchableOpacity>
                <Text style={{ color: "black", textAlign: "center", marginTop: 20 }}
                    onPress={() => navigation.navigate("LoginScreen")}
                > Belum Memiliki akun ? Login </Text>
            </Animatable.View>
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B89AD3'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: "#B89AD3"
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    imageStep: {
        width: "100%",
        padding: 0,
        height: "30%",
        marginBottom: 0,
        resizeMode: 'center',
    },
    buttonLogin: {
        backgroundColor: "#B89AD3",
        height: 40,
        alignItems: "center",
        paddingVertical: 5
    },
    layoutInput: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    input: {
        width: "85%",
        height: 70,
        borderBottomColor: "#000",
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});