import { Animated, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import FastImage from 'react-native-fast-image'
import { useTheme } from '@react-navigation/native'

interface SelectedImageProps {
  selectedImage: string;
}

interface dynamicStylesProps {
  aspectRatio?: number;
  height?: string;
  largeWidthImage: boolean
}

const SelectedImage = ({ selectedImage }: SelectedImageProps) => {
  const theme = useTheme()

  const [dynamicStyles, setDynamicStyles] = useState<dynamicStylesProps>()

  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false)

  //  ajusta dinamocamente el ancho de las imagenes seleccionadas
  useEffect(() => {
    setIsLoadingImage(true)

    if (selectedImage) {
      Image.getSize(selectedImage, (width, height) => {
        if (width > height) {
          setDynamicStyles({
            aspectRatio: width / height,
            largeWidthImage: true
          })
        } else {
          setDynamicStyles({
            aspectRatio: width / height,
            largeWidthImage: false
          })
        }
        setIsLoadingImage(false)
      })
    }
  }, [selectedImage])

  //  hidden header animation
  const headerHeight = 280

  const scrollY = useRef(new Animated.Value(0)).current

  const scrollYClamped = Animated.diffClamp(scrollY, 0, headerHeight)

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, headerHeight / 2],
    extrapolate: 'clamp'
  })

  const translateYNumber = useRef()

  translateY.addListener(({ value }) => {
    translateYNumber.current = value
  })

  console.log('re remder de seleceted image')

  return (
    <Animated.View style={[styles.selectedImageContainer, { backgroundColor: theme.dark ? '#000' : '#fff', transform: [{ translateY }] }]}>
      {selectedImage && !isLoadingImage
        ? (
          <FastImage
            source={{ uri: selectedImage }}
            resizeMode='stretch'
            style={[
              styles.selectedImage,
              { aspectRatio: dynamicStyles?.aspectRatio },
              !dynamicStyles?.largeWidthImage && { flex: 1, height: '100%' },
              dynamicStyles?.largeWidthImage && { maxHeight: '100%' }
            ]}
          />
          )
        : <ActivityIndicator style={styles.activityIndicator} size={35} />
      }
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  selectedImageContainer: {
    width: '100%',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center'
  },

  selectedImage: {
    width: '100%'
  },

  imageContainer: {
    padding: 1,
    backgroundColor: 'black'
  },

  activityIndicator: {
    position: 'absolute',
    zIndex: 1000
  }
})

export default React.memo(SelectedImage)
