import { View, StyleSheet, PermissionsAndroid, Image, Pressable, Animated, useWindowDimensions, FlatList } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
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
  const [images, setImages] = useState<GalleryMediaProps[]>([])

  const [selectedImage, setSelectedImage] = useState<string>('')

  const [dynamicStyles, setDynamicStyles] = useState<dynamicStylesProps>()

  const dimensions = useWindowDimensions()

  useEffect(() => {
    (async () => {
      const granted = await getPermissionsReadExternalStorageAndroid()

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        try {
          const photos = await CameraRoll.getPhotos({ first: 26, assetType: 'Photos' })

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

  //  hidden header animation
  const headerHeight = 280

  const scrollY = useRef(new Animated.Value(0)).current

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  )

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

  const theme = useTheme()

  const flatListRef = useRef<FlatList>(null)

  const onPressImage = (props: GalleryMediaProps) => {
    setSelectedImage(props.node.image.uri)
    flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 })
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.dark ? '#000' : '#fff' }]}>
      <Animated.FlatList
        data={images}
        ref={flatListRef}
        onScroll={handleScroll}
        contentContainerStyle={[images.length < 30 && { height: dimensions.height + headerHeight - 83 }]}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Animated.View style={[styles.selectedImageContainer, { backgroundColor: theme.dark ? '#000' : '#fff', transform: [{ translateY }] }]}>
            {images && (
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
            )}
        </Animated.View>
        )}
        renderItem={({ item, index }) => {
          if (index < 2) {
            return (
              <Pressable style={[styles.imageContainer, { width: dimensions.width / 4 }]}>
                <View style={[styles.image, { backgroundColor: '#403b3b' }]} />
              </Pressable>
            )
          }

          return (
            <Pressable style={[styles.imageContainer, { width: dimensions.width / 4 }]} onPress={() => onPressImage(item)}>
              <FastImage source={{ uri: item.node.image.uri }} style={styles.image} />
            </Pressable>
          )
        }}
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

  image: {
    width: '100%',
    height: 80
  }
})

export default CreatePin
