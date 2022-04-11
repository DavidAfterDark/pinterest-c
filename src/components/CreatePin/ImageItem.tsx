import { Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

interface ImageItemProps {
  onPressImage: (image: string) => void,
  image: string
}

const ImageItem = ({ image, onPressImage }: ImageItemProps) => {
  const dimensions = useWindowDimensions()

  // if (index < 0) {
  //   return (
  //     <Pressable style={[styles.imageContainer, { width: dimensions.width / 4 }]}>
  //       <View style={[styles.image, { backgroundColor: '#403b3b' }]} />
  //     </Pressable>
  //   )
  // }

  return (
    <Pressable style={[styles.imageContainer, { width: dimensions.width / 4 }]} onPress={() => onPressImage(image)}>
      <FastImage source={{ uri: image }} style={styles.image} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    padding: 1,
    backgroundColor: 'black'
  },

  image: {
    width: '100%',
    height: 80
  }
})

export default React.memo(ImageItem)
