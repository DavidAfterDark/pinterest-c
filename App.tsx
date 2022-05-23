import React from 'react'
import Root from './src/navigation'
import BottomModalState from './src/context/BottomModal/BottomModalState'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NhostReactProvider } from '@nhost/react'
import { NhostClient } from '@nhost/nhost-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BACKEND_URL } from './src/constant'

const queryClient = new QueryClient()

const nhost = new NhostClient({
  backendUrl: BACKEND_URL,
  clientStorageType: 'react-native',
  clientStorage: AsyncStorage
})

const App = () => {
  return (
    <NhostReactProvider nhost={nhost}>
      <QueryClientProvider client={queryClient}>
        <BottomModalState>
            <Root />
        </BottomModalState>
      </QueryClientProvider>
    </NhostReactProvider>
  )
}

export default App
