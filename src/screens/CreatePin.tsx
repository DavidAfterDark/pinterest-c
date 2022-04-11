import { StyleSheet, PermissionsAndroid, Animated, useWindowDimensions, FlatList } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CameraRoll from '@react-native-community/cameraroll'
import { getPermissionsReadExternalStorageAndroid } from '../utils'
import { useTheme, useRoute, useNavigation } from '@react-navigation/native'
import { CreatePinScreenRouteProps, CreatePinScreenNavigationProps } from '../types/NavigationProps'

//  componets
import SelectedImage from '../components/CreatePin/SelectedImage'
import ImageItem from '../components/CreatePin/ImageItem'

interface GalleryMediaProps {
  // icon?: string;
  node: {
    group_name: string; // eslint-disable-line
    image: {
      uri: string
    }
  },
}

const CreatePin = () => {
  const route = useRoute<CreatePinScreenRouteProps>()

  const navigation = useNavigation<CreatePinScreenNavigationProps>()

  const dimensions = useWindowDimensions()

  const theme = useTheme()

  const [images, setImages] = useState<GalleryMediaProps[]>([])

  const [selectedImage, setSelectedImage] = useState<string>('')

  const [numberOfRenderImages, setNumberOfRenderImages] = useState(0)

  //  obtiene el nombre de todos los albunes y el numero total de sus imagenes, asi como el total de todas
  //  set params de los albunes para que puedan ser pasados a otra vista
  useEffect(() => {
    if (!route.params.albums) {
      (async () => {
        const albums = await CameraRoll.getAlbums({ assetType: 'Photos' })
        let total = 0

        albums.forEach((album) => {
          total = total + album.count
        })

        navigation.setParams({ totalImages: total, albums: albums })
      })()
    }
  }, [route.params.album])

  //  obtiene todas las imagenes de los albunes de fotos
  useEffect(() => {
    (async () => {
      const granted = await getPermissionsReadExternalStorageAndroid()

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        try {
          const photos = await CameraRoll.getPhotos({
            first: 50 + numberOfRenderImages,
            assetType: 'Photos',
            groupName: route.params.album
          })

          setImages(photos.edges)
          setSelectedImage(photos.edges[0].node.image.uri)
        } catch (error) {
          console.error(error)
        }
      }
    })()
  }, [route.params.album, route.params.totalImages, numberOfRenderImages])

  //  hidden header animation
  const headerHeight = 280

  const scrollY = useRef(new Animated.Value(0)).current

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  )

  const flatListRef = useRef<FlatList>(null)

  const onPressImage = useCallback((image: string) => {
    console.log('re render=?')
    setSelectedImage(image)
    flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 })
  }, [setSelectedImage])

  const onScrollToEnd = () => {
    setNumberOfRenderImages(numberOfRenderImages + 100)
    console.log(numberOfRenderImages, '<<<<')
  }

  console.log('re remder de create pin screen')

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.dark ? '#000' : '#fff' }]}>
      <Animated.FlatList
        data={images}
        ref={flatListRef}
        onScroll={handleScroll}
        contentContainerStyle={[images.length < 30 && { height: dimensions.height + headerHeight - 83 }]}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={20}
        onEndReached={onScrollToEnd}
        ListHeaderComponent={<SelectedImage selectedImage={selectedImage} />}
        renderItem={({ item, index }) => <ImageItem image={item.node.image.uri} onPressImage={onPressImage} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default CreatePin
