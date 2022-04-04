import React from 'react'
import { useTheme } from '@react-navigation/native'
import { HeaderBackground } from '@react-navigation/elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//  screens
import Home from '../screens/Home'
import Pin from '../screens/Pin'
import Profile from '../screens/Profile'

//  icons
import IconHome from '../components/Svg/IconHome'
import IconProfile from '../components/Svg/IconProfile'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
        <Stack.Screen
          name='Home'
          component={MainTabs}
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

const MainTabs = () => {
  const theme = useTheme()

  return (
     <Tab.Navigator screenOptions={{
       tabBarShowLabel: false,
       tabBarActiveTintColor: theme.dark ? 'gray' : 'black',
       tabBarInactiveTintColor: theme.dark ? '#4f4d4d' : 'black'
     }}>
      <Tab.Screen
        name='HomeScreen'
        component={Home}
        options={() => ({
          header: () => null,
          tabBarIcon: ({ color }) => <IconHome color={color} size={35} />
        })} />

      <Tab.Screen
        name='Profile'
        component={Profile}
        options={() => ({
          title: '',
          headerRight: () => null,
          headerBackground: () => <HeaderBackground style={{ backgroundColor: theme.colors.background }} />,
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <IconProfile color={color} size={35} />
        })}
      />
    </Tab.Navigator>
  )
}

export default MainStack
