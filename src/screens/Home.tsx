import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//  components
import MasonryList from '../components/MasonryList'

//  dummy data
import pins from '../../assets/dummy-data/pins'

const Home = () => {
  return (
    <SafeAreaView>
      <MasonryList data={pins} favoritesButton />
    </SafeAreaView>
  )
}

export default Home
