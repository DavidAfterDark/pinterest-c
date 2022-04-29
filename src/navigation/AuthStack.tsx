import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../types/NavigationProps'

//  screens
import Intro from '../screens/Auth/Intro'
import SignInScreen from '../screens/Auth/SignInScreen'
import SignUpScreen from '../screens/Auth/SignUpScreen'

//  icons
import IconXMark from '../components/Svg/IconXMark'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='IntroScreen'
        component={Intro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='SignInScreen'
        component={SignInScreen}
        options={{
          title: 'Iniciar sesión',
          headerTitleStyle: { fontSize: 18 },
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerLeft: () => <Pressable style={{ padding: 3 }} onPress={() => navigation.goBack()}><IconXMark color='#6D6D6D' size={20} /></Pressable>
        }}
      />

      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
