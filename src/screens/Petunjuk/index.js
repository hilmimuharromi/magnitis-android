import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native"
import { SliderBox } from "react-native-image-slider-box";
import { connect } from 'react-redux';
import { GetPetunjuk } from "@stores/action"

const Petunjuk = ({ data, loading, GetPetunjuk }) => {
    const [images, setImages] = useState(["https://i.ibb.co/1TsjDK4/75282399-1191869204487796-3945002450085537594-n.jpg",
        "https://i.ibb.co/8xNw1hh/tes1.png",])

    useEffect(() => {
        GetPetunjuk()
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, padding: 5, flexDirection: "row", justifyContent: "center" }}>
                <Text>Loading .... </Text>
            </View>
        )
    }

    if (!data) {
        return (
            <ScrollView
                style={{ flex: 1, padding: 5 }}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={() => GetPetunjuk()}
                    />
                }
            >
                <View style={{ flex: 1, padding: 5, flexDirection: "row", justifyContent: "center" }}>
                    <Text>Pull To Refresh</Text>
                </View>
            </ScrollView>
        )
    }




    return (
        <View style={styles.container}>
            <SliderBox
                images={data}
                sliderBoxHeight={300}
                dotColor="#B89AD3"
                // autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                dotStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})

const mapStateToProps = state => {
    const { petunjuk } = state;
    const { data, loading } = petunjuk

    return {
        data,
        loading,
    };
}
const mapDispatchToProps = {
    GetPetunjuk
}

export default connect(mapStateToProps, mapDispatchToProps)(Petunjuk);

