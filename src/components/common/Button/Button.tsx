import { Text, TextProps, Pressable, ViewProps, StyleSheet } from 'react-native'
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
    <Pressable style={[styles.container, buttonStyles]} onPress={onPress}>
      {iconLeft}
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7143A',
    flexDirection: 'row',
    width: 270,
    padding: 10,
    paddingVertical: 8,
    borderRadius: 25,
    alignSelf: 'center'
  },

  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff'
  }
})

export default Button
