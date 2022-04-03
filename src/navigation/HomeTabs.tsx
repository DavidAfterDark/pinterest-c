import React from 'react'
import { useTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//  screens
import Home from '../screens/Home'

//  icons
import IconHome from '../components/Svg/IconHome'

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={() => ({
          header: () => null,
          tabBarIcon: ({ color }) => <IconHome color={color} size={40} />,
          tabBarActiveTintColor: theme.colors.text,
          tabBarInactiveTintColor: 'gray',
          tabBarLabel: () => null
        })} />
    </Tab.Navigator>
  )
}

export default HomeTabs
