import React from 'react'
import { useColorScheme, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Dark, Default } from '../theme'
import MainTabs from './MainTabs'

const Navigation = () => {
  const scheme = useColorScheme()

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={scheme === 'dark' ? 'black' : 'white'} />
      <NavigationContainer theme={scheme === 'dark' ? Dark : Default}>
        <MainTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Navigation
