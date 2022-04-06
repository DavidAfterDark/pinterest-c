import React from 'react'
import Root from './src/navigation'
import BottomModalState from './src/context/BottomModal/BottomModalState'

const App = () => {
  return (
    <BottomModalState>
      <Root />
    </BottomModalState>
  )
}

export default App
