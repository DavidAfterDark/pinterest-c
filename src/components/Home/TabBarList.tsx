import { Text, View } from 'react-native'
import React from 'react'
import { TabBar } from 'react-native-tab-view'

const TabBarList = (props: any) => {
  return (
    <TabBar
      contentContainerStyle={{
        height: 35
      }}
      style={{
      }}
      tabStyle={{
        // width: 70,
      }}
      labelStyle={{
        marginTop: -15,
        backgroundColor: 'red',
        paddingHorizontal: 10
      }}
      // renderLabel={({ route, focused }) => (
      //   <Text style={[focused && { borderBottomWidth: 1, borderBottomColor: '#000' }]}>{route.title}</Text>
      // )}
      scrollEnabled
      pressColor='transparent'
      {...props}
    />
  )
}

export default TabBarList
