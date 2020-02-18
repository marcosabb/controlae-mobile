import React, { useContext } from 'react'
import t from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'

import Ripple from '~/components/Ripple'

import { transmit } from '~/services/infrared'

import {
  Wrapper,
  GroupedContainer,
  RoundedContainer,
  RoundedItem,
  Label
} from './styled'

const size = 56

export function Button ({ icon, label, code }) {
  const theme = useContext(ThemeContext)

  const color = icon === 'power' ? theme.colors.danger : theme.colors.text

  return (
    <Ripple
      width={size}
      height={size}
      radius={size / 2}
      onPress={() => transmit(code)}
    >
      <Wrapper>
        {icon && <Icon name={icon} size={20} color={color} />}
        {label && <Label>{label}</Label>}
      </Wrapper>
    </Ripple>
  )
}

Button.defaultProps = {
  icon: null,
  label: null
}

Button.propTypes = {
  icon: t.string,
  label: t.string,
  code: t.string.isRequired
}

export function Grouped ({ label, items }) {
  const { up, down } = items

  return (
    <GroupedContainer>
      <Button icon={up.icon} code={up.code} />
      <Label>{label}</Label>
      <Button icon={down.icon} code={down.code} />
    </GroupedContainer>
  )
}

Grouped.propTypes = {
  label: t.string.isRequired,
  items: t.shape({
    up: t.shape({
      action: t.func,
      icon: t.string,
      code: t.string
    }),
    down: t.shape({
      action: t.func,
      icon: t.string,
      code: t.string
    })
  }).isRequired
}

export function Rounded ({ items }) {
  const { up, right, down, left, center } = items

  return (
    <RoundedContainer>
      <RoundedItem>
        <Button icon={up.icon} code={up.code} />
      </RoundedItem>

      <RoundedItem>
        <Button icon={left.icon} code={left.code} />
        <Button label={center.label} code={center.code} />
        <Button icon={right.icon} code={right.code} />
      </RoundedItem>

      <RoundedItem>
        <Button icon={down.icon} code={down.code} />
      </RoundedItem>
    </RoundedContainer>
  )
}

Rounded.propTypes = {
  items: t.shape({
    up: t.shape({
      action: t.func,
      icon: t.string,
      code: t.string
    }),
    right: t.shape({
      action: t.func,
      icon: t.string,
      code: t.string
    }),
    down: t.shape({
      action: t.func,
      icon: t.string,
      code: t.string
    }),
    left: t.shape({
      action: t.func,
      icon: t.string,
      code: t.string
    }),
    center: t.shape({
      action: t.func,
      label: t.string,
      code: t.string
    })
  }).isRequired
}
