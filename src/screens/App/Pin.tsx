import { View, Text, StyleSheet, Image, ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme, useRoute } from '@react-navigation/native'
import { PinScreenRouteProps } from '../../types/NavigationProps'
import { usePin } from '../../hooks/usePin'

interface pinProps {
  imageUrl: string, // eslint-disable-line
  title: string
}

const Pin = () => {
  const route = useRoute<PinScreenRouteProps>()

  const theme = useTheme()

  const pinID = route?.params?.id

  const { pinByID } = usePin(pinID)

  const [pin, setPin] = useState<pinProps>()
  const [ratio, setRatio] = useState<number>(1)

  useEffect(() => {
    if (!pinByID.isLoading && pinByID.data) {
      setPin(pinByID.data.pins_by_pk)

      console.log(pin)

      if (pin?.imageUrl) {
        Image.getSize(pin.imageUrl, (width, height) => setRatio(width / height))
      }
    }
  }, [pinByID.isLoading, pinByID.data])

  if (pinByID.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={38} color='red' />
      </View>
    )
  }

  return (
    <>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <SafeAreaView style={styles.scrollView}>
        <ScrollView>
          <View style={[styles.cardContainer, { backgroundColor: theme.dark ? '#292827' : 'white' }]}>
            {pin?.imageUrl && <FastImage source={{ uri: pin.imageUrl }} style={[styles.image, { aspectRatio: ratio }]} />}
            {pin?.title && <Text style={[styles.title, { color: theme.colors.text }]}>{pin.title}</Text>}
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
