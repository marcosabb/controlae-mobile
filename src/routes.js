import React, { useContext } from 'react'
import t from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'
import { StatusBar } from 'react-native'
import { ThemeContext } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Devices from '~/screens/Devices'
import Brands from '~/screens/Brands'
import Control from '~/screens/Control'

const Stack = createStackNavigator()

function Back ({ tintColor }) {
  return <Icon name='chevron-left' size={26} color={tintColor} />
}

export default function Routes () {
  const theme = useContext(ThemeContext)

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle='dark-content'
      />

      <Stack.Navigator
        initialRouteName='Devices'
        screenOptions={{
          headerStyle: {
            elevation: 0,
            backgroundColor: theme.colors.background
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.text
          },
          headerTitleAlign: 'center',
          headerBackImage: Back
        }}
      >
        <Stack.Screen
          name='Devices'
          options={{
            title: 'Dispositivos'
          }}
          component={Devices}
        />
        <Stack.Screen
          name='Brands'
          options={{
            title: 'Marcas'
          }}
          component={Brands}
        />
        <Stack.Screen
          name='Control'
          options={{
            title: 'Controle'
          }}
          component={Control}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

Back.propTypes = {
  tintColor: t.string.isRequired
}
