import { View, Text, StyleSheet, ActivityIndicator, Pressable, PressableProps, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import { useTheme } from '@react-navigation/native'

//  icons
import IconHeart from '../Svg/IconHeart'

interface PinProps {
  image: string,
  title: string,
  onPressImage: PressableProps['onPress'],
  onPressHeart: PressableProps['onPress'],
}

const Pin = ({ image, title, onPressImage, onPressHeart }: PinProps) => {
  const [loadingImage, setLoadingImage] = useState<boolean>(false)

  const [ratio, setRatio] = useState<number>(1)

  const theme = useTheme()

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height))
    }
  }, [image])

  return (
    <Pressable style={styles.container} onPress={onPressImage}>
      <View style={styles.imageContainer}>
        {loadingImage && <ActivityIndicator style={styles.activityIndicator} size={35} />}
        <FastImage
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ratio }]}
          onLoadStart={() => setLoadingImage(true)}
          onLoad={() => setLoadingImage(false)}
        />
        <Pressable style={styles.heartContainer} onPress={onPressHeart}>
          <IconHeart fill='transparent' stroke={theme.colors.text} size={25} />
        </Pressable>
      </View>
        <Text style={styles.title}>{title}</Text>
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
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: '100%',
    borderRadius: 25
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
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    margin: 10,
    color: '#fff',
    marginBottom: 25
  }
})

export default Pin
