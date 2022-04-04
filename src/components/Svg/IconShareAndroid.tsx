import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

interface IconShareAndroidProps {
  size?: number,
  color?: SvgProps['fill']
}

const IconShareAndroid = ({ size, color = 'red' }: IconShareAndroidProps) => (
  <Svg
    width={size || 24}
    height={size || 24}
    strokeWidth={1.5}
  >
    <Path
      d='M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path d='m15.5 6.5-7 4M8.5 13.5l7 4' stroke={color} />
  </Svg>
)

export default IconShareAndroid
