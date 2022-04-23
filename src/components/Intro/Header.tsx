import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// components
import MasonryList from '../common/MasonryList'

const IMAGES = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1649833153197-15c20d15d516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80',
    title: ''
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1647318162554-cfb4d8f5b527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    title: ''
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1649618308882-55626bc1ff45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    title: ''
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1648887744641-d32c19b5a10b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    title: ''
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1649298855626-f85043cabad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: ''
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1649353935061-454ace9d2055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: ''
  }
]

const Header = () => {
  return (
    <View>
      <MasonryList data={IMAGES} numColumns={3} disableTouch containerStyles={{ top: -80 }} contentContainerStyle={{ height: 140 }} />
      <View style={styles.shadow}>
        <Text>hola soy un texto</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    top: -80,
    height: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 30
  },
  shadow: {
    padding: 20,
    backgroundColor: '#d9d9d9',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
})

export default Header
