import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground } from 'react-native';


const BeforeLogin = ({ navigation }) => {
    return <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 3, flexDirection: "row", justifyContent: "flex-end", alignContent: "flex-end" }}>
            <Image
                style={styles.imageKampus}
                source={
                    require("@assets/logokampus.png")} />
        </View>
        <View style={{ flex: 3, justifyContent: "center", alignContent: "center",  padding: 10 }}>
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
            <Button
                style={styles.buttonStep}
                title="Next"
                onPress={() => navigation.navigate("LoginScreen")}
            />
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
        width: 300,
        height: 300
    },
    imageBg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        height: 400,
        width:  400
    },
    titleText: {
        fontFamily: "Cochin",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonStep: {
        width: 10
    }
});

export default BeforeLogin