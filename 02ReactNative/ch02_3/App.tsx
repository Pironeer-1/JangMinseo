import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import * as D from './src/data'

const person = D.createRandomPerson()
export default function App() {
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(person, null, 2)}</Text>
    </SafeAreaView> //stringfy 함수를 이용하여 문자열로 변환
  )
}