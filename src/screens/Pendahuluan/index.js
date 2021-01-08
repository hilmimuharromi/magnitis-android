import React from "react"
import { ScrollView, useWindowDimensions, Image, Text, View, Dimensions} from "react-native";
import iframe from '@native-html/iframe-plugin';
import HTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';
import WebView from 'react-native-webview';
const Pendahuluan = () => {
    const contentWidth = useWindowDimensions().width;
    const htmlContent = `
   <p style=\"text-align:justify;\"><span style=\"font-family: Times New Roman;\"><strong>a)</strong></span> <span style=\"font-family: Times New Roman;\"><strong>Medan Magnet</strong></span></p>\n<p style=\"text-align:justify;\"><span style=\"font-family: Times New Roman;\">Medan Magnet adalah ruang di sekitar magnet yang masih dipengaruhi oleh gaya magnet. Medan magnet dapat timbul karena magnet permanen dan penghantar berarus listrik. Sifat dari medan magnet adalah  sebagai berikut :</span></p>\n<p style=\"text-align:justify;\"><span style=\"font-family: Times New Roman;\"><strong>1)</strong></span> <span style=\"font-family: Times New Roman;\"><strong>Arah medan magnet sama dengan arah garis gaya</strong></span> <span style=\"font-family: Times New Roman;\"><strong>magnet</strong></span></p>\n<p style=\"text-align:center;\"></p>\n<img src=\"https://i.imgur.com/GzgfrIT.png\" alt=\"gambar medan magnet\" style=\"height: auto;width: auto\"/>\n<p></p>\n<p style=\"text-align:center;\"><span style=\"font-family: Times New Roman;\"><strong>Gambar 2.5. </strong>Penggambaran Garis Medan Magnet Sebuah Magnet Batang</span></p>\n<p style=\"text-align:justify;\"><span style=\"font-family: Times New Roman;\">Arah medan magnet pada suatu titik didefinisikan sebagai arah yang ditunjuk kutub utara pada sebuah jarum kompas ketika diletakkan di titik tersebut. Pada Gambar 2.5. menunjukan bahwa bagaimana suatu garis medan magnet ditemukan disekitar magnet batang dengan menggunakan jarum kompas. </span></p>\n<p style=\"text-align:justify;\"><span style=\"font-family: Times New Roman;\">Medan di luar magnet batang digambarkan pada Gambar 2.6. Berdasarkan Gambar 2.5. dan Gambar 2.6. dapat terlihat garis-garis magnet selalu menunjuk dari kutub utara menuju kutub selatan magnet.</span></p>\n<p style=\"text-align:center;\"></p>\n\n<p style=\"text-align:center;\"><span style=\"font-family: Times New Roman;\"><strong>Gambar 2.6. </strong>Garis-Garis Medan Magnet di Luar Magnet Batang</span></p>\n<p style=\"text-align:center;\">&nbsp;</p>\n<p style=\"text-align:justify;\"><span style=\"font-family: Times New Roman;\"><strong>2)</strong></span> <span style=\"font-family: Times New Roman;\"><strong>Besar medan magnet sebanding dengan kerapatan garis</strong></span> <span style=\"font-family: Times New Roman;\"><strong>gaya</strong></span></p>\n<p style=\"text-align:justify;\"><span style=\"font-family: Times New Roman;\">Kerapatan garis gaya magnet paling besar terdapat di sekitar kutub magnet sehingga didapati medan magnet paling besar.</span> <span style=\"font-family: Times New Roman;\">Medan magnet didefinisikan di sembarang titik sebagai vektor, yang dinyatakan dengan symbol B. Arah medan magnet ditentukan seperti yang telah dibahas sebelumnya, dengan menggunakan jarum kompas. Besar  dari B dapat didefinisikan dalam momen yang diberikan pada jarum kompas.  Ketika membentuk sudut tertentu terhadap medan magnet, sehingga semakin besar momen, maka semakin besar pula kuat medan magnet (Giancoli, 2001).</span></p>\n<p></p>\n<iframe width=\"80%\" height=\"500px\" src=\"https://www.youtube.com/embed/wR0i9J9CGbg\" frameBorder=\"0\"></iframe>\n<p></p>\n<p></p>\n<iframe width=\"80%\" height=\"500px\" src=\"https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_in.html\" frameBorder=\"0\"></iframe>\n<p></p>\n
`;

function renderNode(node, index, siblings, parent, defaultRenderer) {
    // console.log(node)
    if (node.name == 'iframe') {
      const a = node.attribs;
      console.log(a)
      const iframeHtml = `<iframe width="900" src="${a.src}"></iframe>`;
      return (
        <View key={index} style={{width: "100%", height: 500, flex: 1}}>
          <WebView width={"100%"} source={{html: iframeHtml}} />
        </View>
      );
    }
  }

const renderers = {
    iframe,
    img: (htmlAttribs, children, convertedCSSStyles, passProps) => (
        <View key={htmlAttribs.src}>
            <Image style={{width: 300, height: 300}} source={{uri: htmlAttribs.src}} />
            <Text >{JSON.stringify(htmlAttribs)}</Text>
            </View>
            )
  }

const computeEmbeddedMaxWidth = (availableWidth) => {
    return Math.min(availableWidth, 500);
  };

    return (
      <ScrollView style={{ flex: 1, padding: 5, backgroundColor: "#fff" }}>
          {/* <HTML 
        source={{ html: htmlContent }}
        contentWidth={contentWidth}
        // computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
        renderers={renderers}
        WebView={WebView}
        renderersProps={{ iframe: { scalesPageToFit: false, resizeMode: 'contain' }, img:{ scalesPageToFit: true,}}} 
            /> */}
            <HTMLView
        value={htmlContent}
        renderNode={renderNode}
        // stylesheet={styles}
      />
         
      </ScrollView>
    );
}

export default Pendahuluan