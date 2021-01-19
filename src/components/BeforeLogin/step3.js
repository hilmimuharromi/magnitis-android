import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
// const windowWidth = useWindowDimensions().width;

const BeforeLogin = ({ navigation }) => {
    return <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 3, flexDirection: "row", justifyContent: "flex-end", alignContent: "flex-end" }}>
            <Image
                style={styles.imageKampus}
                source={
                    require("@assets/logokampus.png")} />
        </View>
        <View style={{ flex: 3, justifyContent: "center", alignContent: "center", padding: 10 }}>
            <View style={{ flex: 1, flexDirection: "column", alignContent: "center", alignItems: "center" }}>
                <ImageBackground source={require("@assets/bgstep3.png")} style={styles.imageBg} >
                    <Image
                        style={styles.imageStep}
                        source={
                            { uri: "https://video-public.canva.com/VADsKtxmp_U/v/97c5d29085.gif" }} />
                </ImageBackground>
                <Text style={styles.titleText}>
                    Belajar semakin seru karena aplikasi{"\n"}
                    dilengkapi dengan animasi, video, dan {"\n"}
                     simulasi.
                    </Text>
            </View>
        </View>
        <View style={{ flex: 2 }}>
            <TouchableOpacity style={styles.buttonStep} onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={styles.text_footer}>Next </Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    imageKampus: {
        width: 70,
        height: 70,
        resizeMode: 'center',
    },
    imageStep: {
        width: "70%",
        height: "70%"
    },
    imageBg: {
        flex: 1,
        resizeMode: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: windowWidth,
    },
    titleText: {
        fontFamily: "Cochin",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonStep: {
        backgroundColor: "#B89AD3",
        height: 40,
        alignItems: "center",
        paddingVertical: 5
    },
    text_footer: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default BeforeLogin