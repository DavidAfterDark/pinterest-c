import { View, Text } from 'react-native'
import React from 'react'
import List from '@react-native-seoul/masonry-list'

interface MassonryListProps {
  boardTitle: string
}

const MasonryList = ({ boardTitle }: MassonryListProps) => {
  console.log(boardTitle)

  return (
    <View>
      <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    </View>
  )
}

export default MasonryList
