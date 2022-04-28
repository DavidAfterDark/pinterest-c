import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconSvgProps } from '../../types/svgProps'

const IconEye = ({ size, color }: IconSvgProps) => (
  <Svg
    width={size || 24}
    height={size || 24}
    fill={color || 'red'}
    viewBox="0 0 20 20"
  >
    <Path d="M10 7.5a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 10 7.5zm0 7a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z" />
  </Svg>
)

export default IconEye
