//Person에 속성을 지정할 수 있도록

import React from "react";
import type { FC } from "react";
import { Text } from "react-native";
import * as D from '../data'

export type PersonProps = {
    person: D.IPerson
}
const Person: FC<PersonProps> = ({person}) => {
    return <Text>{JSON.stringfy(person, null, 2)}</Text>
}
export default Person