import 'react-native-gesture-handler'
import '~/config/reactotron'

import React from 'react'

import Routes from './routes'

import { ThemeProvider } from '~/contexts/theme'

export default function App () {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}
