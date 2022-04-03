import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const Default = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000001'
  }
}

export const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: '#fffffe'
  }
}
