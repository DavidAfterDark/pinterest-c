import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ModalAddContext from '../../context/ModalAdd/ModalAddContext'
import Modal from 'react-native-modal'
import { useTheme } from '@react-navigation/native'

const TabBarModal = () => {
  const { visible, setVisible } = useContext(ModalAddContext)

  const theme = useTheme()

  const toggleModal = () => {
    setVisible(!visible)
  }

  return (
    <>
      {visible && (
        <Modal
          isVisible={visible}
          style={styles.modal}
          onBackButtonPress={toggleModal}
          onBackdropPress={toggleModal}
        >
          <View style={[styles.card, { backgroundColor: theme.dark ? '#27272B' : '#fff' }]}>
            <Text style={[styles.title, { color: theme.dark ? '#fff' : '#000' }]} >Crear</Text>
            <Text style={[styles.text, { color: theme.dark ? '#fff' : '#000' }]} onPress={() => console.log('on press Create Pin')}>Pin</Text>
            <Text style={[styles.text, { color: theme.dark ? '#fff' : '#000' }]} onPress={() => console.log('on press Create Tablero')}>Tablero</Text>

            <TouchableOpacity style={[styles.button, { backgroundColor: theme.dark ? '#4C4C4Dff' : '#EAEAEC' }]} onPress={toggleModal}>
              <Text style={[styles.buttonText, { color: theme.dark ? '#fff' : '#000' }]}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </>

  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginHorizontal: 0,
    marginBottom: 0,
    justifyContent: 'flex-end'
  },

  card: {
    height: 255,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20
  },

  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 25
  },

  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 15

  },

  button: {
    alignSelf: 'center',
    padding: 20,
    borderRadius: 45,
    backgroundColor: '#4C4C4Dff'
  },

  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16
  }
})

export default TabBarModal
