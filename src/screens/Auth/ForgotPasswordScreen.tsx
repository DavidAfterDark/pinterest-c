import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm } from 'react-hook-form'
import { useTheme } from '@react-navigation/native'

//  components
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'

interface formData {
  usernameOrEmail: string
}

const ForgotPassword = () => {
  const { control, handleSubmit, resetField } = useForm<formData>()

  const isDarkTheme = useTheme().dark

  const cleanField = () => resetField('usernameOrEmail')

  const onPressSend = () => {
    console.log('press send')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Text style={[styles.title, { color: isDarkTheme ? '#fff' : '#000' }]}>Encontremos tu cuenta de Pinterest C</Text>
          <Text style={[styles.subTitle, { color: isDarkTheme ? '#fff' : '#000' }]}>¿Cual es tu correo o nombre de usuario?</Text>
          <Input
            name='usernameOrEmail'
            control={control}
            placeholder='correo o nombre de usuario'
            resetField={cleanField}
            rules={{
              required: { value: true, message: 'Ingresa tu correo o nombre de usuario' }
            }}
          />

          <Button
            text='Continuar'
            onPress={handleSubmit(onPressSend)}
            buttonStyles={styles.button}
          />

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
    alignItems: 'center',
    marginHorizontal: 20
  },

  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 15
  },

  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25
  },

  input: {
    width: '100%'
  },

  button: {
    marginTop: 35,
    width: '100%'
  }
})

export default ForgotPassword
