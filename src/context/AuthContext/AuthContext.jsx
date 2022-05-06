import React, { createContext } from 'react'

const AuthContext = createContext({})

const AuthContextProvider = ({ clindren }) => {
  return (
    <AuthContext.Provider>
      {clindren}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
