// 일반 방식의 컴포넌트
// const ArrowComponent = () => {
//     return null
// }
// export default ArrowComponent

import React from "react";
import { Text } from "react-native";
import * as D from '../data'

const person = D.createRandomPerson()
const ArrowComponent = () => {
    return <Text>{JSON.stringify(person, null, 2)}</Text> //stringfy 함수를 이용하여 문자열로 변환
}
export default ArrowComponent