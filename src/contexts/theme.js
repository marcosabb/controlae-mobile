import React, { createContext, useState, useEffect, useCallback } from 'react'
import t from 'prop-types'
import AsyncStorage from '@react-native-community/async-storage'
import { ThemeProvider as Provider } from 'styled-components'

import theme from '~/theme'

const ThemeContext = createContext()

function ThemeProvider ({ children }) {
  const [dark, setDark] = useState(null)

  useEffect(() => {
    async function fetchStorage () {
      try {
        const storage = await AsyncStorage.getItem('@controlae:dark')

        if (storage) {
          setDark(JSON.parse(storage))
        } else {
          setDark(false)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchStorage()
  }, [])

  const toggleTheme = useCallback(async () => {
    setDark(!dark)

    try {
      await AsyncStorage.setItem('@controlae:dark', JSON.stringify(!dark))
    } catch (error) {
      console.log(error)
    }
  }, [dark])

  return (
    <ThemeContext.Provider value={{
      dark,
      toggleTheme
    }}
    >
      <Provider theme={dark ? theme.dark : theme.light}>
        {children}
      </Provider>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: t.node.isRequired
}

export { ThemeProvider, ThemeContext }
