import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconSvgProps } from '../../types/svgProps'

const IconShareIos = ({ size, color = 'red' }: IconSvgProps) => (
  <Svg
    width={size || 24}
    height={size || 24}
    strokeWidth={1.5}
    fill='none'
  >
    <Path
      d="M20 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6M12 15V3m0 0L8.5 6.5M12 3l3.5 3.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default IconShareIos
