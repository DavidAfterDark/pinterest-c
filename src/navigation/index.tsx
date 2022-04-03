import React from 'react'
import { useColorScheme, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Dark, Default } from '../theme'
import HomeTabs from './HomeTabs'

const Navigation = () => {
  const scheme = useColorScheme()

  console.log(scheme)

  return (
    <>
      <StatusBar backgroundColor={scheme === 'dark' ? 'black' : 'white'} />
      <NavigationContainer theme={scheme === 'dark' ? Dark : Default}>
        <HomeTabs />
      </NavigationContainer>
    </>
  )
}

export default Navigation
