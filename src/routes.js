import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Control from '~/screens/Control'

const Stack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Control'>
        <Stack.Screen name='Control' component={Control} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
