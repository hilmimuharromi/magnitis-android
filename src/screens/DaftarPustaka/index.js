import React, { useEffect } from "react"
import { View, Text, ScrollView, RefreshControl } from "react-native";
import HtmlRender from "@components/HtmlRender"
import { connect } from 'react-redux';
import { GetPage } from "@stores/action"

const DaftarPustaka = ({ data, loading, GetPage }) => {
  useEffect(() => {
    GetPage("daftar-pustaka")
  }, [])

  if (loading) {
    return (
      <View>
        <Text>Loading .... </Text>
      </View>
    )
  }
  return (
    <ScrollView style={{ flex: 1, padding: 5, backgroundColor: "#fff" }}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => GetPage("daftar-pustaka")} />
      }
    >
      <HtmlRender data={data} />
    </ScrollView>
  );
}

const mapStateToProps = state => {
  const { pages } = state;
  const { data, loading } = pages

  return {
    data,
    loading
  };
}
const mapDispatchToProps = {
  GetPage
}

export default connect(mapStateToProps, mapDispatchToProps)(DaftarPustaka);