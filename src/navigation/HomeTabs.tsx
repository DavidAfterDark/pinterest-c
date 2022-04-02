import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//  screens
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
    </Tab.Navigator>
  )
}

export default HomeTabs
