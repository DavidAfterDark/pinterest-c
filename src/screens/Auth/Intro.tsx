import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '../../constant'

//  components
import Header from '../../components/Intro/Header'
import IconPinterestClon from '../../components/Svg/IconPinterestClon'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import IconFacebookRounded from '../../components/Svg/IconFacebookRounded'
import IconGoogle from '../../components/Svg/IconGoogle'

interface formData {
  email: string,
}

const Intro = () => {
  const theme = useTheme()

  const { control, resetField, handleSubmit } = useForm<formData>()

  const cleanEmailField = () => {
    resetField('email')
  }

  const onPressContinue = ({ email }: formData) => {
    console.log(email.trim())
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.dark ? '#000' : '#fff' }]}>
      <Header />
      <View style={styles.iconPinterestClonContainer}>
        <IconPinterestClon />
      </View>
      <Text style={[styles.welcomeText, { color: theme.dark ? '#fff' : '#000' }]}>Te damos la bienvenida a Pinterest C</Text>

      <View style={styles.body}>
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

        <Button
          text='Continuar'
          buttonStyles={styles.buttonContinue}
          onPress={handleSubmit(onPressContinue)}
        />

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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  iconPinterestClonContainer: {
    alignSelf: 'center',
    top: -25,
    marginBottom: -22
  },

  welcomeText: {
    fontSize: 28,
    textAlign: 'center',
    paddingHorizontal: 25
  },

  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },

  input: {
    marginBottom: 30
  },

  buttonContinue: {
    marginBottom: 25
  },

  buttonFacebook: {
    marginBottom: 10,
    backgroundColor: '#1178f2'
  },

  buttonGoogle: {
    backgroundColor: '#4d4d4d'
  }

})

export default Intro
