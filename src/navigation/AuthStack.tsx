import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from '../screens/Auth/Intro'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='IntroScreen'
        component={Intro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
