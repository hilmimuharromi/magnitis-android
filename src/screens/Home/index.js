import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CardMenu from "@components/CardMenu"


const Home = (props) => {
    const { dataUser, navigation } = props
    const username = dataUser.name

    const listMenu = [
        {
            key: 1,
            name: "PENDAHULUAN",
            path: "pendahuluan"
        }, {
            key: 2,
            name: "KI/KD",
            path: "ki_kd"
        },
        {
            key: 3,
            name: "PETA KONSEP",
            path: "petaKonsep"

        },
        {
            key: 4,
            name: "KEGIATAN PEMBELAJARAN",
            path: "pembelajaran"
        },
        {
            key: 5,
            name: "GLOSARIUM",
            path: "glosarium"
        }, {
            key: 6,
            name: "DAFTAR PUSTAKA",
            path: "daftarPustaka"
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image
                    style={styles.imageLogo}
                    source={
                        require("@assets/magnitis.png")} />
                <Text style={styles.textHalo}> Hai {username} !</Text>
            </View>
            <View style={styles.viewMenu}>
                {listMenu.map((item) => (<CardMenu key={item.key} label={item.name} path={item.path} navigation={navigation} />))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: "center"
    },
    viewLogo: {
        flex: 2,
        justifyContent: "center",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
    },
    viewMenu: {
        flex: 2,
        justifyContent: "center",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    imageLogo: {
        width: 300,
        height: "50%",
        marginBottom: 0,
        resizeMode: 'center',
    },
    textHalo: {
        fontWeight: "bold",
        fontSize: 18
    }

});


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

export default connect(mapStateToProps, mapDispatchToProps)(Home);