import React, {Component} from 'react'
import { Text } from 'react-native'
import * as D from '../data'

const person = D.createRandomPerson()
export default class ClassComponent extends Component {
    render() {
        return <Text>{JSON.stringify(person, null, 2)}</Text> //stringfy 함수를 이용하여 문자열로 변환
    }
}