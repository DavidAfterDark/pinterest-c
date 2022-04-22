import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

interface inputProps {
  placeholder?: string,
  inputStyles?: TextInputProps['style'],
  inputContainerStyles?: TextInputProps['style'],
  secureTextEntry?: boolean,
  onBlur?: TextInputProps['onBlur'],
  control: any,
  name: string,
  rules?: object,
  autoCapitalize?: TextInputProps['autoCapitalize'],
  blurOnSubmit?: TextInputProps['blurOnSubmit'];
}

const CustomInput = ({ name, control, rules = {}, placeholder, inputStyles, inputContainerStyles, secureTextEntry = false, onBlur, autoCapitalize, blurOnSubmit }: inputProps) => {
  const [openEye, setOpenEye] = useState(false)

  const onPressEye = () => {
    setOpenEye(!openEye)
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View style={[inputContainerStyles]}>
          <TextInput
            style={[styles.input, inputStyles, error && { borderColor: '#FF1D1D' }]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry && !openEye}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            autoCapitalize={autoCapitalize}
            blurOnSubmit={blurOnSubmit}
          />

          {secureTextEntry && (
            <TouchableOpacity onPress={onPressEye} style={styles.eye}>
              {/* <Feather name={openEye ? 'eye' : 'eye-off'} size={20} color='#A2A4B0' /> */}
            </TouchableOpacity>
          )}

          {error && <Text style={styles.errorMessage}>{error?.message}</Text>}
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#A2A4B0',
    paddingLeft: 15,
    fontSize: 16
  },

  eye: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
    textAlignVertical: 'center',
    top: '25%',
    right: 15,
    zIndex: 500
  },

  errorMessage: {
    color: '#FF1D1D',
    marginTop: 10
  }
})

export default CustomInput
