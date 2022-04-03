import * as React from 'react'
import { View } from 'react-native'
import Svg, { SvgProps, Path, G } from 'react-native-svg'

interface IconProfileProps {
  color?: SvgProps['fill'],
  size?: number,
}

const IconProfile = ({ color = 'red', size }: IconProfileProps) => (
  <>
    <Svg
      width={size}
      height={size}
      fill={color}
      viewBox='180 75 330 200'
    >
      <G>
      <Path
        d='M439.6 380.8c0 3.063-2.492 5.598-5.563 5.598h-168.08c-3.027 0-5.562-2.504-5.562-5.598 0-49.484 40.117-89.602 89.602-89.602s89.602 40.117 89.602 89.602zM349.998 280c-27.836 0-50.398-22.566-50.398-50.398 0-27.836 22.562-50.402 50.398-50.402s50.398 22.566 50.398 50.402c0 27.832-22.562 50.398-50.398 50.398z'
      />
      </G>
    </Svg>
    <View style={{ borderWidth: 8, width: 40, borderColor: 'transparent' }} />
  </>
)

export default IconProfile
