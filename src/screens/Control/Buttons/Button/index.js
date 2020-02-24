import React, { useContext } from 'react'
import t from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'

import Ripple from '~/components/Ripple'

import { transmit } from '~/services/infrared'

import {
  Container,
  Label
} from './styled'

const size = 56

export default function Button ({ icon, label, code, handlePress }) {
  const { colors } = useContext(ThemeContext)

  const color = icon === 'power' ? colors.danger : colors.text

  return (
    <Ripple
      width={size}
      height={size}
      radius={size / 2}
      onPress={handlePress || (() => transmit(code))}
    >
      <Container>
        {icon && <Icon name={icon} size={20} color={color} />}
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
