import React, { useReducer, useMemo } from 'react'
import ModalAddContext from './ModalAddContext'
import ModalAddReducer from './ModalAddReducer'
import { SET_VISIBLE } from '../types'

const ModalAddState = ({ children }) => {
  const initialState = {
    visible: false
  }

  const [state, dispatch] = useReducer(ModalAddReducer, initialState)

  const modalContext = useMemo(() => ({
    setVisible: (state) => {
      dispatch({ type: SET_VISIBLE, payload: state })
    }
  }), [])

  return (
      <ModalAddContext.Provider value={{ visible: state.visible, setVisible: modalContext.setVisible }}>
        {children}
      </ModalAddContext.Provider>
  )
}

export default ModalAddState
