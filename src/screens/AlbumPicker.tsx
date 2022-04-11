import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Album from '../components/AlbumPicker/Album'
import { useTheme, useRoute } from '@react-navigation/native'
import { AlbumPickerScreenRouteProps } from '../types/NavigationProps'

// interface AlbumsProps {
//   count: number;
//   title: string;
// }

const AlbumPicker = () => {
  const theme = useTheme()

  const route = useRoute<AlbumPickerScreenRouteProps>()

  const { albums } = route.params

  // const [albumName, setAlbumName] = useState<AlbumsProps[]>([])

  // useEffect(() => {
  //   (async () => {
  //     const granted = await getPermissionsReadExternalStorageAndroid()

  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       try {
  //         const albums = await CameraRoll.getAlbums({ assetType: 'Photos' })

  //         setAlbumName(albums)
  //       } catch (error) {
  //         console.error(error)
  //       }
  //     }
  //   })()
  // }, [])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.dark ? '#000' : '#fff' }]}>
      <FlatList
        data={albums}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Album title={item.title} count={item.count} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default AlbumPicker
