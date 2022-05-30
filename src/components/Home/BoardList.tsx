import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import React from 'react'

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
)

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
)

const createRenderScene = () => {
  const dataFromBackend = [
    {
      id: '1',
      title: 'titulo_1'
    },

    {
      id: '2',
      title: 'titulo_2'
    }
  ]

  const obj = {}

  dataFromBackend.forEach((data) => {
    obj.title = 'hola mundo'
  })

  console.log(obj)
}

createRenderScene()

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute
})

const BoardList = () => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' }
  ])

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
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

export default BoardList
