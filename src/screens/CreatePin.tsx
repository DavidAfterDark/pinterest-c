import { View, StyleSheet, FlatList, PermissionsAndroid, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CameraRoll from '@react-native-community/cameraroll'
import { getPermissionsReadExternalStorageAndroid } from '../utils'
import FastImage from 'react-native-fast-image'
import { useTheme } from '@react-navigation/native'

interface GalleryMediaProps {
  icon?: string;
  node: {
    group_name: string; // eslint-disable-line
    image: {
      uri: string
    }
  },
}

interface dynamicStylesProps {
  aspectRatio?: number;
  height?: string;
  largeWidthImage: boolean
}

const CreatePin = () => {
  const theme = useTheme()

  const [images, setImages] = useState<GalleryMediaProps[]>([])

  const [selectedImage, setSelectedImage] = useState<string>('')

  const [dynamicStyles, setDynamicStyles] = useState<dynamicStylesProps>()

  useEffect(() => {
    (async () => {
      const granted = await getPermissionsReadExternalStorageAndroid()

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        try {
          const photos = await CameraRoll.getPhotos({ first: 25, assetType: 'Photos' })

          setImages([{ icon: 'icono 1', node: { group_name: '', image: { uri: '' } } }, { icon: 'icono 1', node: { group_name: '', image: { uri: '' } } }, ...photos.edges])

          setSelectedImage(photos.edges[0].node.image.uri)
          Image.getSize(photos.edges[0].node.image.uri, (width, height) => {
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
          })
        } catch (error) {
          console.error(error)
        }
      }
    })()
  }, [])

  useEffect(() => {
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
      })
    }
  }, [selectedImage])

  const onPressImage = (props: GalleryMediaProps) => {
    setSelectedImage(props.node.image.uri)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.selectedImageContainer, { backgroundColor: theme.dark ? '#000' : '#fff' }]}>
        {images && <FastImage source={{ uri: selectedImage }} style={[styles.selectedImage, { aspectRatio: dynamicStyles?.aspectRatio }, !dynamicStyles?.largeWidthImage && { height: '100%' }]} resizeMode='stretch' />}
      </View>
      <FlatList
        data={images}
        renderItem={({ item, index }) => {
          if (index < 2) {
            return (
              <Pressable style={styles.imageContainer}>
                <View style={[styles.image, { backgroundColor: 'gray' }]} />
              </Pressable>
            )
          }

          return (
            <Pressable style={styles.imageContainer} onPress={() => onPressImage(item)}>
              <FastImage source={{ uri: item.node.image.uri }} style={styles.image} />
            </Pressable>
          )
        }}
        numColumns={4}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  selectedImageContainer: {
    width: '100%',
    height: '51%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  selectedImage: {
    width: '100%'
  },

  imageContainer: {
    flex: 1
  },

  image: {
    width: '100%',
    height: 80
  }
})

export default CreatePin
