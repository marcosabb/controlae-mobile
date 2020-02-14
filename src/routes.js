import React, { useContext, useEffect } from 'react'
import t from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { StatusBar } from 'react-native'
import { ThemeContext } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import Devices from '~/screens/Devices'
import Brands from '~/screens/Brands'
import Control from '~/screens/Control'

const Stack = createStackNavigator()

function Back ({ tintColor }) {
  return <Icon name='chevron-left' size={26} color={tintColor} />
}

export default function Routes () {
  const theme = useContext(ThemeContext)

  useEffect(() => {
    changeNavigationBarColor('white', true)
  }, [])

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
          headerBackImage: Back,
          headerTintColor: theme.colors.text,
          headerPressColorAndroid: theme.colors.ripple,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
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

Back.propTypes = {
  tintColor: t.string.isRequired
}
