import 'react-native-gesture-handler'
import '~/config/reactotron'

import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import Routes from './routes'

import { ThemeProvider } from '~/contexts/theme'

export default function App () {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}
