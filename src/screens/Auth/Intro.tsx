import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

//  components
import Header from '../../components/Intro/Header'
import IconPinterestClon from '../../components/Svg/IconPinterestClon'
import Button from '../../components/common/Button'

const Intro = () => {
  const theme = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.dark ? '#000' : '#fff' }]}>
      <Header />
      <View style={styles.iconPinterestClonContainer}>
        <IconPinterestClon />
      </View>
      <Text style={[styles.welcomeText, { color: theme.dark ? '#fff' : '#000' }]}>Te damos la bienvenida a Pinterest C</Text>

      <View style={styles.buttonGroups}>
        <Button
          text='Continuar'
          onPress={() => console.log('press continuar')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  iconPinterestClonContainer: {
    alignSelf: 'center',
    top: -15
  },

  welcomeText: {
    fontSize: 28,
    textAlign: 'center',
    paddingHorizontal: 25
  },

  buttonGroups: {
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default Intro
