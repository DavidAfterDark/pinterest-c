import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const Default = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000',
    background: '#fff'
  }
}

export const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: '#fff',
    background: '#000'

  }
}
