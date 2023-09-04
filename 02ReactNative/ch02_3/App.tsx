import React from 'react'
import { SafeAreaView } from 'react-native'
import ClassComponent from './src/screens/ClassComponent'
import ArrowComponent from './src/screens/ArrowComponent'
import Person from './src/screens/Person'
import * as D from './src/data'

const person = D.createRandomPerson()
export default function App() {
  return (
    <SafeAreaView>
      <ClassComponent />
      <ArrowComponent />
      <Person person={person} />
    </SafeAreaView> //person 속성을 Person 컴포넌트로 전달
  )
}