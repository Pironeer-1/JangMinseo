import React from 'react'
import type {FC, ComponentProps} from 'react'
import { Text } from 'react-native-paper'
import type {TextStyle, StyleProp} from 'react-native'
import Icon from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon'
import { TouchableView } from './TouchableView'
import type { TouchableViewProps } from './TouchableView'

export type IconTextProps = TouchableViewProps &
    ComponentProps<typeof Icon> & {
        text: number | string
        textStyle: StyleProp<TextStyle>
    }

export const IconText: FC<IconTextProps> = ({
    name, size, color, textStyle,  text, ...TouchableViewProps }) => {
        return (
            <TouchableView {...TouchableViewProps}>
                <Icon name={name} size={size} color={color} />
                <Text style={textStyle}>{text}</Text>
            </TouchableView>
        )
    }

