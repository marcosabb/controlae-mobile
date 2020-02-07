import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Eletronic from '~/screens/Select/Eletronic'
import Brand from '~/screens/Select/Brand'
import Control from '~/screens/Control'

const Stack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Eletronic'>
        <Stack.Screen name='Equipment' component={Eletronic} />
        <Stack.Screen name='Brand' component={Brand} />
        <Stack.Screen name='Control' component={Control} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
