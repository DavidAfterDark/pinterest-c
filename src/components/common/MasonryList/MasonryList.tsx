import { View, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

//  components
import Pin from './Pin'

interface MasonryListProps {
  data: { id: string, image: string, title: string }[],
  favoritesButton?: boolean,
  onPressFavoriteButton?: () => void
}

const MasonryList = ({ data, favoritesButton = false, onPressFavoriteButton }: MasonryListProps) => {
  const width = useWindowDimensions().width

  const numColumns = Math.ceil(width / 300)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((col, colIndex) => (
          <View style={styles.column} key={colIndex}>
            {data.filter((_item, index) => index % numColumns === colIndex).map((pin) => <Pin key={pin.id} pin={pin} favoritesButton={favoritesButton} onPressFavoriteButton={onPressFavoriteButton} />)}
          </View>
        ))}
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
