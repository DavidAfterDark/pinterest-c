import React from 'react'
import Root from './src/navigation'
import ModalAddState from './src/context/ModalAdd/ModalAddState'

const App = () => {
  return (
    <ModalAddState>
      <Root />
    </ModalAddState>
  )
}

export default App
