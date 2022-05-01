import { Text, TextProps, TouchableOpacity, ViewProps, StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'

interface ButtonProps {
  iconLeft?: ReactNode;
  onPress: () => void;
  text: string;
  buttonStyles?: ViewProps['style'];
  textStyles?: TextProps['style'];
  disable?: boolean;
}

const Button = ({ iconLeft, onPress, text, buttonStyles, textStyles, disable }: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, disable && styles.disableContainer, buttonStyles]} onPress={onPress} disabled={disable}>
      <View style={styles.iconLeft}>
        {iconLeft}
      </View>
      <Text style={[styles.text, Boolean(iconLeft) && { marginLeft: 10 }, disable && styles.disableText, textStyles]}>{text}</Text>
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

  disableContainer: {
    backgroundColor: '#a9a9a9'
  },

  iconLeft: {
    position: 'absolute',
    left: 10
  },

  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },

  disableText: {
    color: '#343434'
  }
})

export default Button
