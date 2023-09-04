import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { MD2Colors } from 'react-native-paper'
import * as D from '../data'

const title = 'Content'
export default function Content() {
    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>{title}</Text>
            <View style={[{flex: 0, backgroundColor: MD2Colors.red500}]}>
                <Text>flex: 0</Text>
            </View>
            <View style={[{flex: 1, backgroundColor: MD2Colors.green500}]}>
                <Text>flex: 1</Text>
            </View>
            <View style={[{flex: 2, backgroundColor: MD2Colors.purple500}]}>
                <Text>flex: 2</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1, padding: 5,
        backgroundColor: MD2Colors.lightBlue100
    },
    text: {fontSize: 20, color: 'white'}
})