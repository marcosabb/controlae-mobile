import React, { useContext, useEffect } from 'react'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { StatusBar } from 'react-native'
import { ThemeContext } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import Devices from '~/screens/Devices'
import Brands from '~/screens/Brands'
import Control from '~/screens/Control'

import Back from './Back'
import Toggle from './Toggle'

const Stack = createStackNavigator()

export default function Routes () {
  const theme = useContext(ThemeContext)

  useEffect(() => {
    changeNavigationBarColor('#171822', true)
  }, [])

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.colors.background}
        // barStyle='dark-content'
        barStyle='light-content'
      />

      <Stack.Navigator
        initialRouteName='Devices'
        screenOptions={{
          headerTitleAlign: 'center',
          headerRight: Toggle,
          headerBackImage: Back,
          headerTintColor: theme.colors.text,
          headerPressColorAndroid: theme.colors.ripple,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            elevation: 0,
            backgroundColor: theme.colors.background
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.text
          }
        }}
      >
        <Stack.Screen
          name='Devices'
          component={Devices}
          options={{ title: 'Dispositivos' }}
        />
        <Stack.Screen
          name='Brands'
          component={Brands}
          options={{ title: 'Marcas' }}
        />
        <Stack.Screen
          name='Control'
          component={Control}
          options={{ title: 'Controle' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
