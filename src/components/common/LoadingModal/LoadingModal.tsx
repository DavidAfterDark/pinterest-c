import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

interface NotificationModalProps {
  isVisible: boolean;
}

const LoadingModal = ({ isVisible }: NotificationModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn='fadeIn'
      animationOut='fadeOut'
      style={styles.container}
    >
      <View style={styles.content}>
        <ActivityIndicator size={30} color='#C30026' />
        <Text style={styles.text}>Cargando</Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content: {
    flexDirection: 'row',
    backgroundColor: '#242424',
    width: 270,
    padding: 15
  },

  text: {
    textAlignVertical: 'center',
    marginLeft: 20,
    fontSize: 16,
    color: '#fff'
  }
})

export default LoadingModal
