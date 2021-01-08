import React from "react"
import { ScrollView, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";

const DaftarPustaka = () => {
    const contentWidth = useWindowDimensions().width;

    const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

    return (
      <ScrollView style={{ flex: 1 }}>
        <HTML source={{ html: htmlContent }} contentWidth={contentWidth} />
      </ScrollView>
    );
}

export default DaftarPustaka