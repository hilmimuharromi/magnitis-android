import React from "react"
import { ScrollView, useWindowDimensions, Dimensions } from "react-native";
import iframe from '@native-html/iframe-plugin';
import HTML from 'react-native-render-html';
import { WebView } from 'react-native-webview';


const windowWidth = Dimensions.get('window').width;
const wp = (percent) => {
    return windowWidth * percent / 100
}

const HtmlRender = ({ data }) => {
    const contentWidth = wp(100);

    const renderers = {
        iframe,
    }

    const computeEmbeddedMaxWidth = (availableWidth) => {
        return Math.min(availableWidth, wp(100));
    };

    const tagsStyles = {
        iframe: {
            opacity: 0.99,
            width: "90%"
        }
    }

    return (
        <HTML
            tagsStyles={tagsStyles}
            // onLinkPress={(e) => console.log(e, "tesss")}
            source={{ html: data ? data : "<p>Not Found</p>" }}
            contentWidth={contentWidth}
            computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
            renderers={renderers}
            WebView={WebView}
            renderersProps={{
                iframe: {
                    // scalesPageToFit: true,
                    WebViewProps: {
                        scalesPageToFit: true,
                        // renderLoading: { handleLoading },
                        bounces: false,
                        androidHardwareAccelerationDisabled: true
                    },
                    img: { scalesPageToFit: true, }
                }
            }}
        />
    );
}

export default HtmlRender