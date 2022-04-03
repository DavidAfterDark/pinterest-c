import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

//  components
import Pin from '../components/Home/Pin'

//  dummy data
import pins from '../../assets/dummy-data/pins'

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins.filter((item, index) => index % 2 === 0).map((pin) => <Pin key={pin.id} pin={pin} />)}
        </View>

        <View style={styles.column}>
          {pins.filter((item, index) => index % 2 === 1).map((pin) => <Pin key={pin.id} pin={pin} />)}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  column: {
    flex: 1,
    padding: 5
  }
})

export default Home
