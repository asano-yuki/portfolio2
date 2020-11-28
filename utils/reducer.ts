import types from './actionTypes'
import { ActionTypes } from './actionCreators'

interface State {
  isOpen: boolean
}

export const reducer = (
  state  : State,
  action : ActionTypes
): State => {
  switch (action.type) {
  case types.OPEN_MENU:
    return { ...state, isOpen: true }
  case types.CLOSE_MENU:
    return { ...state, isOpen: false }
  default:
    return { ...state, isOpen: true }
  }
}
