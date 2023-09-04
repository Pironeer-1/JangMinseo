import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { MD2Colors } from 'react-native-paper' // 수정
import { Colors } from "react-native/Libraries/NewAppScreen";

console.log(Colors.blue500)
export default function App() {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>
        안뇽 스타일시트 월드!
      </Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  SafeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'
    , backgroundColor: Colors.blue500},
  text: {fontSize: 20, color: Colors.blue200}
})