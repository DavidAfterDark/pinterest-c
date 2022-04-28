import { Text, TextProps, TouchableOpacity, ViewProps, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

interface ButtonProps {
  iconLeft?: ReactNode;
  onPress: () => void;
  text: string;
  buttonStyles?: ViewProps['style'];
  textStyles?: TextProps['style']
}

const Button = ({ iconLeft, onPress, text, buttonStyles, textStyles }: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, buttonStyles]} onPress={onPress}>
      {iconLeft}
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C30026',
    flexDirection: 'row',
    width: 270,
    height: 45,
    alignItems: 'center',
    padding: 10,
    paddingVertical: 8,
    borderRadius: 25
  },

  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default Button
