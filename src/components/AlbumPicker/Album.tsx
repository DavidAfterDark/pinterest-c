import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import { useTheme, useNavigation } from '@react-navigation/native'
import { CreatePinScreenNavigationProps } from '../../types/NavigationProps'
import CameraRoll from '@react-native-community/cameraroll'

interface AlbumsProps {
  title: string;
  count: number;
}

interface AlbumDataProps {
  node: {
    group_name: string; // eslint-disable-line
    image: {
      uri: string
    }
  }
}

const Album = ({ title, count }: AlbumsProps) => {
  const theme = useTheme()

  const navigation = useNavigation<CreatePinScreenNavigationProps>()

  const [album, setAlbum] = useState<AlbumDataProps>()

  const [loadingImage, setLoadingImage] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const photo = await CameraRoll.getPhotos({ first: 1, assetType: 'Photos', groupName: title })
      setAlbum(photo.edges[0])
    })()
  }, [])

  const onPressAlbum = () => {
    navigation.navigate('CreatePin', { album: title, totalImages: count })
  }

  return (
    <Pressable style={styles.container} onPress={onPressAlbum}>
      {loadingImage && <ActivityIndicator style={styles.activityIndicator} size={35} />}
      <FastImage
        source={{ uri: album?.node.image.uri }}
        style={styles.image}
        onLoadStart={() => setLoadingImage(true)}
        onLoad={() => setLoadingImage(false)}
      />
      <View style={styles.albumNameContainer}>
        <Text style={[styles.albumName, { color: theme.dark ? '#fff' : '#000' }]}>{album?.node.group_name}</Text>
        <Text style={styles.albumCount}>{count}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 15
  },

  activityIndicator: {
    position: 'absolute',
    zIndex: 1000
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 5,
    marginBottom: 10
  },

  albumNameContainer: {
    justifyContent: 'center',
    marginLeft: 15
  },

  albumName: {
    fontSize: 16,
    fontWeight: '600'
  },

  albumCount: {
    color: 'gray'
  }
})

export default Album
