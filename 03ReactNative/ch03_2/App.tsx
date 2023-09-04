import React from 'react'
import { Platform, Dimensions, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { MD2Colors } from 'react-native-paper'
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
  <SafeAreaView style={[styles.SafeAreaView]}>
    <Text style={[styles.text]}>os: {Platform.OS} </Text>
    <Text style={[styles.text]}>width: {width} px</Text>
    <Text style={[styles.text]}>height: {height} px</Text>

    <View style={[styles.box, {borderRadius: 10}]} />
    <View style={[styles.box, styles.border]} />
    <View style={[styles.box, styles.border, {borderRadius: 10}]} />
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  SafeAreaView: {backgroundColor: MD2Colors.blue500, flex: 1,
    paddingLeft: Platform.select({ios: 0, android: 20})
  },
  text: {marginBottom: 10, fontSize: 20, marginLeft: 50, marginTop: 20},
  box: {width: '70%', height: 100, backgroundColor: 'white', marginBottom: 10,
    marginLeft: Platform.select({ios: 20, android: 0})
  },
  border: {borderWidth: 10, borderColor: MD2Colors.lime500}
})