import React from 'react'
import { useTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//  screens
import Home from '../screens/Home'

//  icons
import IconHome from '../components/Svg/IconHome'
import Pin from '../screens/Pin'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeTabs = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
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

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={() => ({
          header: () => null
        })}
      />

      <Stack.Screen
        name='Pin'
        component={Pin}
        options={() => ({
          title: '',
          headerTransparent: true,
          headerBackVisible: true
        })}
      />
    </Stack.Navigator>
  )
}

export default HomeTabs
