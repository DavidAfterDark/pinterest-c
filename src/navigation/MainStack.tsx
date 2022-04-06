import React from 'react'
import { View, Platform } from 'react-native'
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
import IconShareAndroid from '../components/Svg/IconShareAndroid'
import IconShareIos from '../components/Svg/IconShareIos'
import IconEllipsis from '../components/Svg/IconEllipsis'

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
       tabBarActiveTintColor: theme.dark ? '#fff' : '#000',
       tabBarInactiveTintColor: theme.dark ? '#4f4d4d' : 'gray'
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
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              {Platform.OS === 'android' ? <IconShareAndroid color={theme.colors.text} size={30} /> : <IconShareIos color={theme.colors.text} size={30} />}
              <View style={{ marginLeft: 10, marginRight: 5 }}><IconEllipsis color={theme.dark ? 'white' : 'black' } size={30} /></View>
            </View>
          ),
          headerBackground: () => <HeaderBackground style={{ backgroundColor: theme.colors.background }} />,
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <IconProfile color={color} size={35} />
        })}
      />
    </Tab.Navigator>
  )
}

export default MainStack