import { View, Text, Image, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
        <FormikPostUploader />
    </View>
) // render

const Header = () => (
    <View style={styles.headerContainer}>
        <TouchableOpacity>
            <Image
                source={{ uri: 'https://img.icons8.com/ios-glyphs/90/back.png' }}
                style={{ width: 30, height: 30 }}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW POST</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 2
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        marginRight: 15
    }
})

export default AddNewPost