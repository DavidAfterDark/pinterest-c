import React from 'react'
import { useColorScheme, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Dark, Default } from '../theme'
import MainStack from './MainStack'

const Navigation = () => {
  const scheme = useColorScheme()

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={scheme === 'dark' ? 'black' : 'white'}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer theme={scheme === 'dark' ? Dark : Default}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Navigation
