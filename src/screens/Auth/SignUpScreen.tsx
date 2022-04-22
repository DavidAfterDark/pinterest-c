import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'

import CustomInput from '../../components/common/CustomInput'

const SignUpScreen = () => {
  const { control } = useForm()

  return (
    <View>
      <CustomInput
        name='name'
        control={control}
        placeholder='Nombre'
      />
      <Text>SignUpScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SignUpScreen
