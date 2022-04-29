import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../types/NavigationProps'

//  screens
import Intro from '../screens/Auth/Intro'
import SignInScreen from '../screens/Auth/SignInScreen'
import SignUpScreen from '../screens/Auth/SignUpScreen'
import ForgotPassword from '../screens/Auth/ForgotPasswordScreen'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
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
          headerBackVisible: false
        }}
      />

      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{
          title: 'Registro de usuario',
          headerTitleStyle: { fontSize: 18 },
          headerTitleAlign: 'center',
          headerBackVisible: false
        }}
      />

      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{
          title: 'Restablecer contraseña',
          headerTitleStyle: { fontSize: 18 },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
