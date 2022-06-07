import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

// components
import MasonryList from '../common/MasonryList'

const IMAGES = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1649833153197-15c20d15d516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80',
    title: ''
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1647318162554-cfb4d8f5b527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    title: ''
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1649618308882-55626bc1ff45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    title: ''
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1648887744641-d32c19b5a10b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    title: ''
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1649298855626-f85043cabad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: ''
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1649353935061-454ace9d2055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: ''
  }
]

const Header = () => {
  const theme = useTheme()

  return (
    <View>
      <MasonryList
        data={IMAGES}
        numColumns={3}
        disableTouch
        containerStyles={styles.containerStyles}
        contentContainerStyle={styles.contentContainerStyle}
      />

      <View style={styles.shadowContainer}>
        <View style={[styles.shadow, { backgroundColor: theme.dark ? '#000' : '#fff', top: -3 }]} />
        <View style={[styles.shadow, { backgroundColor: theme.dark ? '#000' : '#fff', top: -4, opacity: 0.6 }]} />
        <View style={[styles.shadow, { backgroundColor: theme.dark ? '#000' : '#fff', top: -2, opacity: 0.6 }]} />
        <View style={[styles.shadow, { backgroundColor: theme.dark ? '#000' : '#fff', top: -1, opacity: 0.8 }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    top: -95
  },

  contentContainerStyle: {
    height: 120
  },

  shadowContainer: {
    height: 10,
    width: '100%'
  },

  shadow: {
    position: 'absolute',
    height: 1,
    width: '100%',
    opacity: 0.6
  }

})

export default Header
