import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//  screens
import Home from '../screens/Home'

const Stak = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stak.Navigator>
        <Stak.Screen name='Home' component={Home} />
      </Stak.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
