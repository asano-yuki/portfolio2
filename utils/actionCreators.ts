import types from './actionTypes'

export interface ActionTypes {
  type : typeof types.OPEN_MENU | typeof types.CLOSE_MENU
}

export const openMenu = (): ActionTypes => {
  return { type: types.OPEN_MENU }
}

export const closeMenu = (): ActionTypes => {
  return { type: types.CLOSE_MENU }
}

