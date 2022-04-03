import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'

//  components
import Pin from '../components/Home/Pin'

//  dummy data
import pins from '../../assets/dummy-data/pins'

const Home = () => {
  const onPress = () => {
    console.log('press image')
  }

  const onPressHeart = () => {
    console.log('press heart')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Pin image={item.image} title={item.title} onPressImage={onPress} onPressHeart={onPressHeart} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },

  flatList: {
    flex: 1
  }
})

export default Home
