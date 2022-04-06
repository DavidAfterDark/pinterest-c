import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme, useRoute } from '@react-navigation/native'
import { PinScreenRouteProps } from '../types/NavigationProps'

//  dummy data
import pins from '../../assets/dummy-data/pins'

const Pin = () => {
  const route = useRoute<PinScreenRouteProps>()

  const pinID = route?.params?.id

  const pin = pins.find((pin) => pin.id === pinID)

  const theme = useTheme()

  const [ratio, setRatio] = useState<number>(1)

  useEffect(() => {
    Image.getSize(pin.image, (width, height) => setRatio(width / height))
  }, [])

  return (
    <>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <SafeAreaView style={styles.scrollView}>
        <ScrollView>
          <View style={[styles.cardContainer, { backgroundColor: theme.dark ? '#292827' : 'white' }]}>
            <FastImage source={{ uri: pin.image }} style={[styles.image, { aspectRatio: ratio }]} />
            <Text style={[styles.title, { color: theme.colors.text }]}>{pin.title}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black'
  },

  cardContainer: {
    borderRadius: 35,
    overflow: 'hidden'
  },

  image: {
    width: '100%'
  },

  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    lineHeight: 30
  }
})

export default Pin
