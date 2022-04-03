import { View, Text, StyleSheet, ActivityIndicator, Pressable, PressableProps, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import { useTheme, useNavigation } from '@react-navigation/native'

//  icons
import IconHeart from '../Svg/IconHeart'

interface PinProps {
  pin: {
    image: string,
    title: string,
    onPressImage?: PressableProps['onPress'],
    onPressHeart?: PressableProps['onPress'],
  }
}

const Pin = ({ pin }: PinProps) => {
  const [loadingImage, setLoadingImage] = useState<boolean>(false)

  const [ratio, setRatio] = useState<number>(1)

  const theme = useTheme()

  const navigation = useNavigation()

  useEffect(() => {
    if (pin.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height))
    }
  }, [pin.image])

  const goToPinScreen = () => {
    navigation.navigate('Pin')
  }

  return (
    <Pressable style={styles.container} onPress={goToPinScreen}>
      <View style={styles.imageContainer}>
        {loadingImage && <ActivityIndicator style={styles.activityIndicator} size={35} />}
        <FastImage
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
          onLoadStart={() => setLoadingImage(true)}
          onLoad={() => setLoadingImage(false)}
        />
        <Pressable style={styles.heartContainer} onPress={() => console.log('press heart')}>
          <IconHeart fill='transparent' stroke={theme.colors.text} size={25} />
        </Pressable>
      </View>
        <Text style={styles.title}>{pin.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },

  activityIndicator: {
    position: 'absolute',
    zIndex: 1000
  },

  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: '100%',
    borderRadius: 15
  },

  heartContainer: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    backgroundColor: 'gray',
    borderRadius: 50,
    paddingLeft: 4,
    paddingRight: 2.5,
    paddingTop: 4,
    paddingBottom: 2.5
  },

  title: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
    color: '#fff',
    marginTop: 5,
    marginBottom: 25
  }
})

export default Pin
