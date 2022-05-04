import React from 'react'
import Root from './src/navigation'
import BottomModalState from './src/context/BottomModal/BottomModalState'
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

const App = () => {
  return (
      <BottomModalState>
        <Root />
      </BottomModalState>
  )
}

export default App
