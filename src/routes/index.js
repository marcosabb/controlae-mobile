import React, { useContext } from 'react'
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
import Lamp from './Lamp'

const Stack = createStackNavigator()

export default function Routes () {
  const { colors } = useContext(ThemeContext)

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={colors.status}
      />

      <Stack.Navigator
        initialRouteName='Devices'
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackImage: ({ tintColor }) => <Back tintColor={tintColor} />,
          headerRight: ({ tintColor }) => <Lamp tintColor={tintColor} />,
          headerTintColor: colors.text,
          headerPressColorAndroid: colors.ripple,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: {
            elevation: 0,
            backgroundColor: colors.background
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.text
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
