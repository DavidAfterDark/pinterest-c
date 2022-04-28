import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

//  icons
import IconCircleXMark from '../../Svg/IconCircleXMark'
import IconEye from '../../Svg/IconEye'
import IconEyeOff from '../../Svg/IconEyeOff'

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
        <View style={[inputContainerStyles]}>
          <View style={[styles.container]}>
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
    letterSpacing: 0.7,
    borderWidth: 1,
    borderRadius: 25
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
    marginTop: 10
  }
})

export default Input
