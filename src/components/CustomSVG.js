import { View, Text } from 'react-native'
import React from 'react'
import Svg from "react-native-svg";
const CustomSVG = ({svg, w,  h}) => {
    return (

        <View style={{ alignItems: 'center' }}>
            <Svg xmlns={svg} width={w} height={h} />
        </View>

    )
}

export default CustomSVG