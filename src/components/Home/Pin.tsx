import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const Pin = () => {
  return (
    <View style={styles.container}>
      <FastImage source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg' }} style={styles.image} />
      <Text style={styles.title}>Pin</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },

  title: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    margin: 10
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 25
  }
})

export default Pin
