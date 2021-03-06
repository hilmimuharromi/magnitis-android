import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


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
                <Image
                    style={styles.imageStep}
                    source={
                        require("@assets/step2.png")} />
                <Text style={styles.titleText}>
                    Aplikasi berisikan materi konsep medan magnet,
                    aplikasi konsep medan magnet
                    dalam kehidupan sehari-hari, praktikum virtual (Phet),
                    Contoh dan pembahasan soal,
                    serta evaluasi untuk mengetahui kemampuan siswa.
                    </Text>
            </View>
        </View>
        <View style={{ flex: 2 }}>
            <TouchableOpacity style={styles.buttonStep} onPress={() => navigation.navigate('BeforeLoginScreen', { screen: 'step3' })}>
                <Text style={styles.text_footer}>Next </Text>
            </TouchableOpacity>
            {/* <Button
                style={styles.buttonStep}
                title="Next"
                onPress={() => navigation.navigate('BeforeLoginScreen', { screen: 'step3' })}
            /> */}
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
        height: "50%",
        marginBottom: 0,
        resizeMode: 'center',
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