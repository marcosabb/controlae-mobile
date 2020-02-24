import React, { useContext } from 'react'
import t from 'prop-types'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from 'styled-components'

import Ripple from '~/components/Ripple'

import { transmit } from '~/services/infrared'

import {
  Container,
  Label
} from './styled'

const size = 56

function Icon (Component, { name, size = 20, color }) {
  return <Component name={name} size={size} color={color} />
}

const icons = {
  power: (color) => Icon(Feather, { name: 'power', color }),
  source: (color) => Icon(Ionicons, { name: 'ios-log-in', size: 24, color }),
  menu: (color) => Icon(Feather, { name: 'menu', color }),
  home: (color) => Icon(AntDesign, { name: 'home', size: 22, color }),
  back: (color) => Icon(Feather, { name: 'corner-down-left', color }),
  up: (color) => Icon(Feather, { name: 'chevron-up', color }),
  down: (color) => Icon(Feather, { name: 'chevron-down', color }),
  left: (color) => Icon(Feather, { name: 'chevron-left', color }),
  right: (color) => Icon(Feather, { name: 'chevron-right', color }),
  chup: (color) => Icon(Feather, { name: 'chevron-up', color }),
  chdown: (color) => Icon(Feather, { name: 'chevron-down', color }),
  volup: (color) => Icon(Feather, { name: 'plus', color }),
  voldown: (color) => Icon(Feather, { name: 'minus', color }),
  extra: (color) => Icon(Feather, { name: 'more-horizontal', color }),
  mute: (color) => Icon(Feather, { name: 'volume-x', color })
}

export default function Button ({ icon, label, code, handlePress }) {
  const { colors } = useContext(ThemeContext)

  const color = icon === 'power' ? colors.danger : colors.text

  return (
    <Ripple
      width={size}
      height={size}
      radius={size / 2}
      handlePress={handlePress || (() => transmit(code))}
    >
      <Container>
        {icon && icons[icon](color)}
        {label && <Label>{label}</Label>}
      </Container>
    </Ripple>
  )
}

Button.defaultProps = {
  icon: null,
  label: null,
  code: null,
  handlePress: () => {}
}

Button.propTypes = {
  icon: t.string,
  label: t.string,
  code: t.string,
  handlePress: t.func
}
