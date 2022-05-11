import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer } from './index'

// eslint-disable-next-line no-unused-vars
const loggerMiddleware = createLogger({
  predicate: (getState, action) => _DEV_,
})

function configureStore(initState) {
  // const enchancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
  const enchancer = compose(applyMiddleware(thunkMiddleware))
  return createStore(reducer, initState, enchancer)
}

const store = configureStore({})

export default store