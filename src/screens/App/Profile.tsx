import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image'
import { useTheme } from '@react-navigation/native'

//  components
import MasonryList from '../../components/common/MasonryList'

//  dummy data
import pins from '../../../assets/dummy-data/pins'

const Profile = () => {
  const [loadingImage, setLoadingImage] = useState<boolean>(false)

  const theme = useTheme()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { backgroundColor: theme.dark ? 'black' : 'white' }]}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            {loadingImage && <ActivityIndicator style={styles.activityIndicator} size={35} />}
            <FastImage
              source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/8.jpeg' }}
              style={[styles.image]}
              onLoadStart={() => setLoadingImage(true)}
              onLoad={() => setLoadingImage(false)}
            />
          </View>

          <Text style={[styles.name, { color: theme.colors.text }]}>David</Text>
          <Text style={styles.username}>@david.dev</Text>

          <View style={styles.followersContainer}>
            <Text style={[styles.followers, { color: theme.colors.text }]}>101 Seguidores</Text>
            <Text style={[styles.followers, { color: theme.colors.text }]}>  |  </Text>
            <Text style={[styles.followers, { color: theme.colors.text }]}>150 Seguidos</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <Text style={[styles.unorganizedIdeas, { color: theme.colors.text }]}>Ideas sin Organizar</Text>

        <MasonryList data={pins} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    alignItems: 'center',
    marginTop: 75
  },

  activityIndicator: {
    position: 'absolute',
    zIndex: 1000
  },

  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },

  image: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: 'gray'
  },

  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 36
  },

  username: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: 'gray',
    marginBottom: 10
  },

  followersContainer: {
    flexDirection: 'row'
  },

  followers: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginBottom: 10
  },

  separator: {
    width: '90%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
    alignSelf: 'center'
  },

  unorganizedIdeas: {
    fontFamily: 'Inter-Medium',
    fontSize: 22,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 15
  }
})

export default Profile
