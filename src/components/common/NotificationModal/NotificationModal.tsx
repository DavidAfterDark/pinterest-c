import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

interface NotificationModalProps {
  isVisible: boolean;
  message?: string;
  onCloseModal?: () => void;
  isError?: boolean;
  title?: string
}

const NotificationModal = ({ isVisible, message, onCloseModal, isError, title }: NotificationModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn='fadeIn'
      animationOut='fadeOut'
      style={styles.container}
      onBackdropPress={onCloseModal}
      onBackButtonPress={onCloseModal}
    >
      <View style={styles.content}>
        {isError && <Text style={styles.error}>Error</Text>}
        {title && <Text style={styles.error}>{title}</Text>}
        <Text style={styles.text}>{message}</Text>
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
    backgroundColor: '#242424',
    width: 270,
    padding: 15
  },

  error: {
    fontSize: 18,
    fontWeight: '700',
    color: 'red',
    textAlign: 'center'
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },

  text: {
    textAlignVertical: 'center',
    marginLeft: 20,
    fontSize: 16,
    color: '#fff'
  }
})

export default NotificationModal
