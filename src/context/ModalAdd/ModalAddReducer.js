import { SET_VISIBLE } from '../types'

const ModalAddReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case SET_VISIBLE:
      return {
        ...state,
        visible: payload
      }

    default:
      return state
  }
}

export default ModalAddReducer
