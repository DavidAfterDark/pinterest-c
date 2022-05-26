import React, { useContext } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import BottomModalContext from '../../context/BottomModal/BottomModalContext'
import { HomeScreenProps } from '../../types/NavigationProps'
import { usePin } from '../../hooks/usePin'

//  components
import MasonryList from '../../components/common/MasonryList'

//  dummy data
import TabBarModal from '../../components/common/TabBarModal'

const Home = ({ navigation } :HomeScreenProps) => {
  const theme = useTheme()

  const { allPins } = usePin()

  console.log('🚀 ~ file: Home.tsx ~ line 19 ~ Home ~ pins', allPins)

  const { visible, setVisible } = useContext(BottomModalContext)

  const toggleModal = () => {
    setVisible(!visible)
  }

  const goToCreatePinScreen = () => {
    toggleModal()
    navigation.navigate('CreatePin')
  }

  return (
    <SafeAreaView>
        {!allPins.isLoading && allPins.data?.data && <MasonryList data={allPins.data?.data?.pins} favoritesButton />}

        <TabBarModal visible={visible} toggleModal={toggleModal}>
          <Text style={[styles.title, { color: theme.dark ? '#fff' : '#000' }]} >Crear</Text>
          <Text style={[styles.text, { color: theme.dark ? '#fff' : '#000' }]} onPress={goToCreatePinScreen}>Pin</Text>
          <Text style={[styles.text, { color: theme.dark ? '#fff' : '#000' }]} onPress={() => console.log('on press Create Tablero')}>Tablero</Text>

          <TouchableOpacity style={[styles.button, { backgroundColor: theme.dark ? '#4C4C4Dff' : '#EAEAEC' }]} onPress={toggleModal}>
            <Text style={[styles.buttonText, { color: theme.dark ? '#fff' : '#000' }]}>Cerrar</Text>
          </TouchableOpacity>
        </TabBarModal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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

export default Home
