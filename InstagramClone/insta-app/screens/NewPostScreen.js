import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView
        style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}
    >
        <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen