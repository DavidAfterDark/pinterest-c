import { View, ViewProps, Text, StyleSheet, ActivityIndicator, Pressable, PressableProps, Image, TextProps } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import { useTheme, useNavigation } from '@react-navigation/native'
import { PinScrenNavigationProps } from '../../../types/NavigationProps'

//  icons
import IconHeart from '../../Svg/IconHeart'

interface PinProps {
  pin: {
    id: string,
    imageUrl: string, // eslint-disable-line
    title: string,
  },
  onPressFavoriteButton?: PressableProps['onPress'],
 /**
 * default: false
 */
  favoritesButton?: boolean,
  pinStyles?: ViewProps['style'],
  pinTextStyles?: TextProps['style'],
  disableTouch?: boolean
}

const Pin = ({ pin, favoritesButton, onPressFavoriteButton, pinStyles, pinTextStyles, disableTouch }: PinProps) => {
  const [loadingImage, setLoadingImage] = useState<boolean>(false)

  const [ratio, setRatio] = useState<number>(1)

  const theme = useTheme()

  const navigation = useNavigation<PinScrenNavigationProps>()

  useEffect(() => {
    if (pin.imageUrl) {
      Image.getSize(pin.imageUrl, (width, height) => setRatio(width / height))
    }
  }, [pin.imageUrl])

  const goToPinScreen = () => {
    if (disableTouch) return
    navigation.navigate('Pin', { id: pin.id })
  }

  return (
    <Pressable style={[styles.container, pinStyles]} onPress={goToPinScreen}>
      <View style={styles.imageContainer}>
        {loadingImage && <ActivityIndicator style={styles.activityIndicator} size={35} />}
        <FastImage
          source={{ uri: pin.imageUrl }}
          style={[styles.image, { aspectRatio: ratio }]}
          onLoadStart={() => setLoadingImage(true)}
          onLoad={() => setLoadingImage(false)}
        />
        {favoritesButton && (
          <Pressable style={styles.heartContainer} onPress={onPressFavoriteButton}>
            <IconHeart fill='transparent' stroke='white' size={25} />
          </Pressable>
        )}
      </View>
      {pin.title ? <Text style={[styles.title, { color: theme.colors.text }, pinTextStyles]}>{pin?.title}</Text> : null}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 2.5
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
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
    marginTop: 5
  }
})

export default Pin
