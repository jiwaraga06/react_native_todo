import { combineReducers } from 'redux'

import * as authReducer from './authReducer/reducers'
import * as authActions from './authReducer/action'

export const appReducer = combineReducers(Object.assign({}, authReducer))

export const reducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export const actionCreators = Object.assign({}, authActions)