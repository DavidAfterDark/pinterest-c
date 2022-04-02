import { View, StyleSheet } from 'react-native'
import React from 'react'

//  components
import Pin from '../components/Home/Pin'

const Home = () => {
  return (
    <View style={styles.container}>
      <Pin />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
})

export default Home
