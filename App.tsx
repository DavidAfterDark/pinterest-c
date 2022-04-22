import React from 'react'
import Root from './src/navigation'
import BottomModalState from './src/context/BottomModal/BottomModalState'
import { NhostClient, NhostReactProvider } from '@nhost/react'
import { BACKEND_URL } from './src/constant'

const nhost = new NhostClient({
  backendUrl: BACKEND_URL
})

const App = () => {
  return (
    <NhostReactProvider nhost={nhost}>
      <BottomModalState>
        <Root />
      </BottomModalState>
    </NhostReactProvider>
  )
}

export default App
