import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { View } from 'react-native'
import { IconSvgProps } from '../../types/svgProps'

const IconHome = ({ color = 'red', size = 24 }: IconSvgProps) => {
  return (
    <>
      <Svg
        width={size}
        height={size}
        fill={color}
        viewBox='0 -195 700 700'
      >
        <Path d="M350 56 126 224v280h151.2V386.4c0-40.332 32.469-72.801 72.801-72.801s72.801 32.469 72.801 72.801V504h151.2V224z" />
      </Svg>
      <View style={{ borderWidth: 8, width: 40, borderColor: 'transparent' }} />
    </>
  )
}

export default IconHome
