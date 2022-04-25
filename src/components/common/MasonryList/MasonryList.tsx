import { View, ViewProps, ScrollView, StyleSheet, useWindowDimensions, TextProps, ScrollViewProps } from 'react-native'
import React from 'react'

//  components
import Pin from './Pin'

interface MasonryListProps {
  data: { id: string, image: string, title: string }[],
  favoritesButton?: boolean,
  onPressFavoriteButton?: () => void,
  numColumns?: number,
  pinStyles?: ViewProps['style'],
  pinTextStyles?: TextProps['style'],
  containerStyles?: ViewProps['style']
  disableTouch?: boolean
  contentContainerStyle?: ScrollViewProps['style'];
}

const MasonryList = ({
  data,
  favoritesButton = false,
  onPressFavoriteButton,
  numColumns,
  pinStyles,
  pinTextStyles,
  containerStyles,
  contentContainerStyle,
  disableTouch
}: MasonryListProps) => {
  const width = useWindowDimensions().width

  let numOfColumns = Math.ceil(width / 300)

  if (numColumns) {
    numOfColumns = numColumns
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={contentContainerStyle}>
      <View style={[styles.container, containerStyles]}>
        {Array.from(Array(numOfColumns)).map((col, colIndex) => (
          <View style={styles.column} key={colIndex}>
            {data.filter((_item, index) => index % numOfColumns === colIndex).map((pin) => (
              <Pin
                key={pin.id}
                pin={pin}
                favoritesButton={favoritesButton}
                onPressFavoriteButton={onPressFavoriteButton}
                pinStyles={pinStyles}
                pinTextStyles={pinTextStyles}
                disableTouch={disableTouch}
              />
            ))}
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
    flex: 1
  }
})

export default MasonryList
