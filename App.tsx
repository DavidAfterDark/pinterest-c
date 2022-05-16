import React from 'react'
import Root from './src/navigation'
import BottomModalState from './src/context/BottomModal/BottomModalState'
// import { Amplify } from 'aws-amplify'
// import awsconfig from './src/aws-exports'
import { QueryClient, QueryClientProvider } from 'react-query'

// Amplify.configure(awsconfig)

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BottomModalState>
        <Root />
      </BottomModalState>
    </QueryClientProvider>
  )
}

export default App
