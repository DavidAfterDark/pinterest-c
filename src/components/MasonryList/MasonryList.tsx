import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

//  components
import Pin from './Pin'

interface MasonryListProps {
  data: { id: string, image: string, title: string }[],
  favoritesButton?: boolean,
  onPressFavoriteButton?: () => void
}

const MasonryList = ({ data, favoritesButton = false, onPressFavoriteButton }: MasonryListProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          {data.filter((_item, index) => index % 2 === 0).map((pin) => <Pin key={pin.id} pin={pin} favoritesButton={favoritesButton} onPressFavoriteButton={onPressFavoriteButton} />)}
        </View>

        <View style={styles.column}>
          {data.filter((_item, index) => index % 2 === 1).map((pin) => <Pin key={pin.id} pin={pin} favoritesButton={favoritesButton} onPressFavoriteButton={onPressFavoriteButton} />)}
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

export default MasonryList
