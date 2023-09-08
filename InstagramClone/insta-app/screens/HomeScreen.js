import { View, Text, Platform, StatusBar, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 // android notch
    }
})

export default HomeScreen