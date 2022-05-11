/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StatusBar, Text } from 'react-native'

import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens'
//  import Orientation from 'react-native-orientation-locker'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Router from './source/Router'

import store from './source/Models/store'

enableScreens()

// disable font scaling
Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false

export default function App() {
  const navigationRef = React.createRef()

  //  React.useEffect(() => {
  //    Orientation.lockToPortrait()
  //  }, [])

  return (
    <>

      <Provider store={store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    </>
  )
}