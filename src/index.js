import 'react-native-gesture-handler'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import { dark } from './theme'

export default function App () {
  return (
    <ThemeProvider theme={dark}>
      <Routes />
    </ThemeProvider>
  )
}
