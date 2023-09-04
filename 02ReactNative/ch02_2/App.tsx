import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export default function App() {
  // const children = [
  //   <Text>Hello JSX world!</Text>,
  //   <Text>Hello JSX world!</Text>,
  //   <Text>Hello JSX world!</Text>
  // ]
  // return (
  //   <SafeAreaView>
  //     {children} 
  //   </SafeAreaView> //배열 변수에 담긴 JSX문은 반드시 부모 컴포넌트의 자식 컴포넌트 형태로 만들어야 함
  // )

  // const children = [1, 2, 3].map((i) => <Text>Hello world! {i}</Text>)

  // return <SafeAreaView>{children}</SafeAreaView>

  const children = new Array(100)
    .fill(null) // why? undefined로 채워진 배열에는 map method 사용 불가
    .map((notUsed, index) => <Text>Hello world! {index}</Text>)

    return <SafeAreaView>{children}</SafeAreaView>
}