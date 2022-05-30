import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view'
import React, { useState } from 'react'

//  componets
import TabBarList from './TabBarList'
import MasonryList from './MasonryList'

const Boards = () => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)

  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'asdfsdsecondz', title: 'Second' },
    { key: 'ssdfecondz', title: 'Second' },
    { key: 'secxcvxcondc', title: 'Second' },
    { key: 'sexcconds', title: 'Second' }
  ])

  const createRenderScene = () => {
    const dataFromBackend = [
      {
        id: '1',
        title: 'titulo1'
      },

      {
        id: '2',
        title: 'titulo2'
      }
    ]

    const formData = []

    dataFromBackend.forEach((data) => {
      formData.push([data.title, FirstRoute])
    })

    const obj = Object.fromEntries(formData)

    console.log(obj)
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={(props) => <TabBarList {...props} />}
      renderScene={({ route }) => {
        return <MasonryList boardTitle={route.title} />
      }}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Boards
