import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Intro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitleContainer}>
        <Text style={{ color: '#000', bottom: -1}}>Te damos la bienvenida a Pinterest C</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  headerTitleContainer: {
    marginTop: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 20
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 10
  }
})

export default Intro
