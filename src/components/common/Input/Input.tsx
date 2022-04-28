import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import IconCircleXMark from '../../Svg/IconCircleXMark'

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
  resetField: () => void
}

const Input = ({ name, control, rules = {}, placeholder, inputStyles, inputContainerStyles, secureTextEntry = false, onBlur, autoCapitalize, blurOnSubmit, resetField }: inputProps) => {
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
        <View style={[styles.container, inputContainerStyles]}>
          <TextInput
            style={[styles.input, inputStyles, error && { borderColor: '#FF1D1D' }]}
            placeholder={placeholder}
            placeholderTextColor='#6D6D6D'
            secureTextEntry={secureTextEntry && !openEye}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            autoCapitalize={autoCapitalize}
            blurOnSubmit={blurOnSubmit}
            selectionColor='#C30026'
          />

          {value
            ? (
                <TouchableOpacity style={styles.iconCircleXMark} onPress={resetField}>
                  <IconCircleXMark color='#6D6D6D' />
                </TouchableOpacity>
              )
            : null
          }

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
  container: {
    flexDirection: 'row',
    width: 270,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#303030',
    alignItems: 'center'
  },

  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    letterSpacing: 0.7
    // borderWidth: 1,
    // borderColor: '#A2A4B0',
    // paddingLeft: 15,
    // fontSize: 16
  },

  iconCircleXMark: {
    position: 'absolute',
    // top: 5,
    right: 10
  },

  // eye: {
  //   width: 25,
  //   height: 25,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   alignSelf: 'flex-end',
  //   textAlignVertical: 'center',
  //   top: '25%',
  //   right: 15,
  //   zIndex: 500
  // },

  errorMessage: {
    color: '#FF1D1D',
    marginTop: 10
  }
})

export default Input
