import { View, TextInput, StyleSheet, TextInputProps, ViewProps, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { useTheme } from '@react-navigation/native'

//  icons
import IconCircleXMark from '../../Svg/IconCircleXMark'
import IconEye from '../../Svg/IconEye'
import IconEyeOff from '../../Svg/IconEyeOff'

interface inputProps {
  placeholder?: string,
  inputStyles?: TextInputProps['style'],
  inputContainerStyles?: TextInputProps['style'],
  containerStyles?: ViewProps['style'],
  secureTextEntry?: boolean,
  onBlur?: TextInputProps['onBlur'],
  control: any,
  name: string,
  rules?: object,
  autoCapitalize?: TextInputProps['autoCapitalize'],
  blurOnSubmit?: TextInputProps['blurOnSubmit'];
  resetField: () => void
}

const Input = ({ name, control, rules = {}, placeholder, inputStyles, inputContainerStyles, containerStyles, secureTextEntry = false, onBlur, autoCapitalize, blurOnSubmit, resetField }: inputProps) => {
  const isDarkTheme = useTheme().dark

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
        <View style={[containerStyles]}>
          <View style={[styles.containerInput, isDarkTheme && styles.containerInputDarkMode, error && { borderWidth: 1, borderColor: '#FF1D1D' }, inputContainerStyles]}>
            <TextInput
              style={[styles.input, secureTextEntry && { paddingRight: 75 }, { color: isDarkTheme ? '#fff' : '#000' }, inputStyles]}
              placeholder={placeholder}
              placeholderTextColor='#6D6D6D'
              secureTextEntry={secureTextEntry && !openEye}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              autoCapitalize={autoCapitalize}
              blurOnSubmit={blurOnSubmit}
              selectionColor={isDarkTheme ? '#C30026' : '#000'}
            />

            <View style={styles.iconRight}>
              {secureTextEntry && (
                <TouchableOpacity onPress={onPressEye} style={styles.eye}>
                  {openEye ? <IconEye color='#6D6D6D' size={26} /> : <IconEyeOff color='#6D6D6D' size={28} />}
                </TouchableOpacity>
              )}

              {value
                ? (
                    <TouchableOpacity style={styles.iconCircleXMark} onPress={resetField}>
                      <IconCircleXMark color='#6D6D6D' />
                    </TouchableOpacity>
                  )
                : null
              }
            </View>
          </View>
          {error && <Text style={styles.errorMessage}>{error?.message}</Text>}

        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    width: 270,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#cdcdcd',
    borderWidth: 2
  },

  containerInputDarkMode: {
    backgroundColor: '#303030',
    borderWidth: 0
  },

  input: {
    width: '100%',
    height: 50,
    paddingLeft: 15,
    paddingRight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.7
  },

  iconRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10
  },

  iconCircleXMark: {
    marginLeft: 10
  },

  eye: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  errorMessage: {
    color: '#FF1D1D',
    textAlign: 'center',
    marginTop: 10,
    width: 270
  }
})

export default Input
