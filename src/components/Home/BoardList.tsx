import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const data = [
  {
    id: '1',
    title: 'titulo 1'
  },
  {
    id: '2',
    title: 'titulo 2'
  },
  {
    id: '3',
    title: 'titulo 3'
  },
  {
    id: '4',
    title: 'titulo 4'
  }
]

const BoardList = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <View style={{ marginHorizontal: 40 }}><Text>{item.title}</Text></View>}
        horizontal
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default BoardList
