import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '../../constant'
import { useNavigation, useTheme } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SignUpScreenNavigationProps } from '../../types/NavigationProps'

//  components
import Button from '../../components/common/Button'
import IconFacebookRounded from '../../components/Svg/IconFacebookRounded'
import IconGoogle from '../../components/Svg/IconGoogle'
import Input from '../../components/common/Input'

interface formData {
  username: string,
  email: string,
  password: string
}

const SignUpScreen = () => {
  const { control, resetField, handleSubmit } = useForm<formData>()

  const navigation = useNavigation<SignUpScreenNavigationProps>()

  const isDarkMode = useTheme().dark

  const cleanUserNameField = () => resetField('username')

  const cleanEmailField = () => resetField('email')

  const cleanPasswordField = () => resetField('password')

  const goToSigInScreen = () => navigation.navigate('SignInScreen', { email: '' })

  const onPressSignIn = () => {
    console.log('press')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Input
            name='username'
            control={control}
            placeholder='Nombre de usuario'
            resetField={cleanUserNameField}
            rules={{
              required: { value: true, message: 'Ingresa tu nombre de usuario' }
            }}
            inputContainerStyles={styles.input}
          />

          <Input
            name='email'
            control={control}
            placeholder='Correo'
            resetField={cleanEmailField}
            rules={{
              required: { value: true, message: 'Ingresa tu correo electronico' },
              validate: (value: string) => EMAIL_REGEX.test(value.trim()) || 'Este correo electronico no parece ser válido'
            }}
            inputContainerStyles={styles.input}
          />

          <Input
            name='password'
            control={control}
            placeholder='Ingresa tu contraseña'
            resetField={cleanPasswordField}
            secureTextEntry
            rules={{
              required: { value: true, message: 'Ingresa tu contraseña' }
            }}
            inputContainerStyles={styles.passwordInput}
          />

          <Button
            text='Continuar'
            onPress={handleSubmit(onPressSignIn)}
          />

          <Text style={[styles.or, { color: isDarkMode ? '#fff' : '#000' }]}>O</Text>

          <Button
            text='Continuar con Facebook'
            buttonStyles={styles.buttonFacebook}
            onPress={() => console.log('facebook!')}
            iconLeft={<IconFacebookRounded color='#fff' />}
          />

          <Button
            text='Continuar con Google'
            buttonStyles={styles.buttonGoogle}
            onPress={() => console.log('google')}
            iconLeft={<IconGoogle size={26} />}
          />

          <Text style={[styles.footerText, { color: isDarkMode ? '#fff' : '#000' }]}>¿Y tienes cuenta?</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => goToSigInScreen()}>
            <Text style={[styles.footerText, styles.signIngScreen, { color: isDarkMode ? '#fff' : '#000' }]}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  body: {
    marginTop: 15,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20
  },

  input: {
    marginBottom: 10
  },

  passwordInput: {
    marginBottom: 25
  },

  or: {
    marginVertical: 35,
    fontSize: 20
  },

  buttonFacebook: {
    backgroundColor: '#1178f2',
    marginBottom: 10
  },

  buttonGoogle: {
    backgroundColor: '#4d4d4d',
    marginBottom: 25
  },

  footerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#cdcdcd'
  },

  signIngScreen: {
    fontWeight: 'bold'
  }
})

export default SignUpScreen
