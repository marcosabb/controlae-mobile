import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Eletronic from '~/screens/Eletronic'
import Brand from '~/screens/Brand'
import Control from '~/screens/Control'

const Stack = createStackNavigator()

export default function Routes () {
  const theme = useContext(ThemeContext)

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Eletronic'
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.text,
          headerStyle: {
            elevation: 0,
            backgroundColor: theme.background
          }
        }}
      >
        <Stack.Screen
          name='Eletronic'
          component={Eletronic}
          options={{ title: 'Eletrônico' }}
        />
        <Stack.Screen
          name='Brand'
          component={Brand}
          options={{ title: 'Marca' }}
        />
        <Stack.Screen name='Control' component={Control} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
