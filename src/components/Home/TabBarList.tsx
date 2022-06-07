import { Animated, TouchableOpacity, View, StyleSheet } from 'react-native'
import React from 'react'
import { TabBar, TabBarProps } from 'react-native-tab-view'

interface TabBarListProps {
  props: TabBarProps<any>,
  setIndex: any
}

const TabBarList = ({ props, setIndex }: TabBarListProps) => {
  console.log(props)
  const inputRange = props.navigationState.routes.map((_, i) => i)
  return (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) => inputIndex === i ? 1 : 0.5)
        })

        return (
          <TouchableOpacity key={i} style={styles.tabItem}>
            <Animated.Text style={{ opacity: opacity }}>{route.title}</Animated.Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row'
    // paddingTop:
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  }
})

export default TabBarList
