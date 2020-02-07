import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import theme from './theme'

export default function App () {
  return (
    <ThemeProvider theme={theme.dark}>
      <StatusBar backgroundColor={theme.dark.background} />
      <Routes />
    </ThemeProvider>
  )
}
