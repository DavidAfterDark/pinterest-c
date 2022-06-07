import { View, ScrollView, Text, StyleSheet, useWindowDimensions, TouchableOpacity, Animated, I18nManager } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view'
import React, { useState } from 'react'

//  componets
import MasonryList from './MasonryList'

const Boards = () => {
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key: 'first', title: 'Primero' },
    { key: 'asdfsdsecondz', title: 'Segundo' },
    { key: 'ssdfecondz', title: 'Tercero' },
    { key: 'secxcvxcondc', title: 'Cuarto' },
    { key: 'sexcconds', title: 'Quinto' },
    { key: '521154132', title: 'Texto de otra tab' },
    { key: '52165651154132', title: 'Texto de otra tab' }
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
  }

  const renderIndicator = (props) => {
    const { position, navigationState, getTabWidth } = props
    const inputRange = [
      0, 0.48, 0.49, 0.51, 0.52, 1, 1.48, 1.49, 1.51, 1.52, 2
    ]

    const scale = position.interpolate({
      inputRange,
      outputRange: inputRange.map((x) => (Math.trunc(x) === x ? 2 : 0.1))
    })

    const opacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map((x) => {
        const d = x - Math.trunc(x)
        return d === 0.49 || d === 0.51 ? 0 : 1
      })
    })

    const translateX = position.interpolate({
      inputRange: inputRange,
      outputRange: inputRange.map((x) => {
        const i = Math.round(x)
        return i * getTabWidth(i) * (I18nManager.isRTL ? -1 : 1)
      })
    })

    return (
      <Animated.View
        style={[
          styles.container,
          {
            width: `${100 / navigationState.routes.length}%`,
            transform: [{ translateX }] as any
          }
        ]}
      >
        <Animated.View
          style={[styles.indicator, { opacity, transform: [{ scale }] } as any]}
        />
      </Animated.View>
    )
  }

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={(props) => {
        return (
          <TabBar
            {...props}
            scrollEnabled
            tabStyle={{

            }}
            renderIndicator={(props) => {
              const { position, navigationState, getTabWidth } = props
              const inputRange = props.navigationState.routes.map((_, i) => i)

              const scale = position.interpolate({
                inputRange,
                outputRange: inputRange.map((x) => (Math.trunc(x) === x ? 2 : 0.1))
              })

              const opacity = position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex, i) => inputIndex === i ? 1 : 0.5)
              })

              const translateX = position.interpolate({
                inputRange: inputRange,
                outputRange: inputRange.map((x) => {
                  const i = Math.round(x)
                  return i * getTabWidth(i) * (I18nManager.isRTL ? -1 : 1)
                })
              })

              return (
                <Animated.View
                  style={[
                    styles.container,
                    {
                      width: `${100 / navigationState.routes.length}%`,
                      transform: [{ translateX }] as any
                    }
                  ]}
                >
                  <Animated.View
                    style={[styles.indicator, { opacity, transform: [{ scale }] } as any, { width: 20 }]}
                  />
                </Animated.View>
              )
            }}
          />
        )
      }}
    renderScene={({ route }) => <MasonryList boardTitle={route.title} /> }
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
   />
  )
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#263238',
    overflow: 'hidden'
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    backgroundColor: 'rgb(0, 132, 255)',
    width: 48,
    height: 4,
    marginBottom: -25
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: '#f44336',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  count: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2
  }
})

export default Boards
