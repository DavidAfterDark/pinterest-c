import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '../../constant'
import { useNavigation, useTheme } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SignUpScreenNavigationProps } from '../../types/NavigationProps'
import { useAuth } from '../../hooks/useAuth'

//  components
import Button from '../../components/common/Button'
import IconFacebookRounded from '../../components/Svg/IconFacebookRounded'
import IconGoogle from '../../components/Svg/IconGoogle'
import Input from '../../components/common/Input'
import LoadingModal from '../../components/common/LoadingModal'
import NotificationModal from '../../components/common/NotificationModal'

interface formData {
  username: string,
  email: string,
  password: string
}

interface modalProps {
  show: boolean,
  message: string
}

const SignUpScreen = () => {
  const { control, resetField, handleSubmit } = useForm<formData>()

  const navigation = useNavigation<SignUpScreenNavigationProps>()

  const isDarkMode = useTheme().dark

  const { signUp, signUpIsLoading } = useAuth()

  const cleanEmailField = () => resetField('email')

  const cleanPasswordField = () => resetField('password')

  const goToSigInScreen = () => navigation.navigate('SignInScreen', { email: '' })

  const [modal, setModal] = useState<modalProps>({ show: false, message: '' })

  const onRegisterPressed = async (data: formData) => {
    const { email, password } = data

    if (signUpIsLoading) return

    signUp({ email, password }, {
      onSuccess: (result) => {
        console.log(result)
        navigation.navigate('SignInScreen', { email })
      },

      onError: (error) => {
        console.log(error)
        setModal({
          message: 'Oh no! Ya existe una cuenta con ese correo electronico',
          show: true
        })
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Input
            name='email'
            control={control}
            placeholder='Correo'
            resetField={cleanEmailField}
            rules={{
              required: { value: true, message: '¡Te faltó algo! No te olvides de agregar tu correo electrónico.' },
              validate: (value: string) => EMAIL_REGEX.test(value.trim()) || 'Este correo electronico no parece ser válido'
            }}
            containerStyles={styles.input}
          />

          <Input
            name='password'
            control={control}
            placeholder='Ingresa tu contraseña'
            resetField={cleanPasswordField}
            secureTextEntry
            rules={{
              required: { value: true, message: 'Ingresa tu contraseña' },
              minLength: { value: 8, message: 'La contraseña es demasiado corta. Debe tener 6 caracteres o más.' }
            }}
            containerStyles={styles.passwordInput}
          />

          <Button
            text='Registrar'
            onPress={handleSubmit(onRegisterPressed)}
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

          {signUpIsLoading && <LoadingModal isVisible={signUpIsLoading} />}
          {modal.show && <NotificationModal isVisible={modal.show} isError message={modal.message} onCloseModal={() => setModal({ show: false, message: '' })} />}
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
