import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//  components
import MasonryList from '../components/common/MasonryList'

//  dummy data
import pins from '../../assets/dummy-data/pins'
import TabBarModal from '../components/TabBarModal'

const Home = () => {
  return (
    <SafeAreaView>
        <MasonryList data={pins} favoritesButton />
        <TabBarModal />
    </SafeAreaView>
  )
}

export default Home
