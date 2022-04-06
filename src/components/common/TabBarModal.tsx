import { View, StyleSheet, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'
import Modal, { ModalProps } from 'react-native-modal'
import { useTheme } from '@react-navigation/native'

type TabBarModalProps = {
  children?: ReactNode;
  cardStyle?: ViewProps['style'];
  modalStyle?: ModalProps['style'];
  visible: boolean;
  /**
 * Example function:
 *  const toggleModal = () => {
    setVisible(!visible)
  }
 */
  toggleModal: () => void
}

const TabBarModal = ({ children, modalStyle, cardStyle, visible, toggleModal }: TabBarModalProps) => {
  const theme = useTheme()

  return (
    <>
      {visible && (
        <Modal
          isVisible={visible}
          style={[styles.modal, modalStyle]}
          onBackButtonPress={toggleModal}
          onBackdropPress={toggleModal}
        >
          <View style={[styles.card, { backgroundColor: theme.dark ? '#27272B' : '#fff' }, cardStyle]}>
            {children}
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
