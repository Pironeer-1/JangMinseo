import { View, Text, Platform, StatusBar, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} />
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