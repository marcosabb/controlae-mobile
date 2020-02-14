import React, { useContext } from 'react'
import t from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from 'styled-components'

import Ripple from '~/components/Ripple'

import {
  Wrapper,
  GroupedContainer,
  RoundedContainer,
  RoundedItem,
  Label
} from './styled'

const size = 56

export function Button ({ icon, label, onPress }) {
  const theme = useContext(ThemeContext)

  return (
    <Ripple
      width={size}
      height={size}
      radius={size / 2}
      onPress={onPress}
    >
      <Wrapper>
        {icon && <Icon name={icon} size={20} color={theme.colors.text} />}
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
  onPress: t.func.isRequired
}

export function Grouped ({ label, buttons }) {
  const { up, down } = buttons

  function handleUp () {
    up.action()
  }

  function handleDown () {
    down.action()
  }

  return (
    <GroupedContainer>
      <Button icon={up.icon} onPress={handleUp} />
      <Label>{label}</Label>
      <Button icon={down.icon} onPress={handleDown} />
    </GroupedContainer>
  )
}

Grouped.propTypes = {
  label: t.string.isRequired,
  buttons: t.shape({
    up: t.shape({
      action: t.func,
      icon: t.string
    }),
    down: t.shape({
      action: t.func,
      icon: t.string
    })
  }).isRequired
}

export function Rounded ({ buttons }) {
  const { up, right, down, left, center } = buttons

  function handleUp () {
    up.action()
  }

  function handleRight () {
    right.action()
  }

  function handleDown () {
    down.action()
  }

  function handleLeft () {
    left.action()
  }

  function handleCenter () {
    center.action()
  }

  return (
    <RoundedContainer>
      <RoundedItem>
        <Button icon={up.icon} onPress={handleUp} />
      </RoundedItem>

      <RoundedItem>
        <Button icon={left.icon} onPress={handleLeft} />
        <Button label={center.label} onPress={handleCenter} />
        <Button icon={right.icon} onPress={handleRight} />
      </RoundedItem>

      <RoundedItem>
        <Button icon={down.icon} onPress={handleDown} />
      </RoundedItem>
    </RoundedContainer>
  )
}

Rounded.propTypes = {
  buttons: t.shape({
    up: t.shape({
      action: t.func,
      icon: t.string
    }),
    right: t.shape({
      action: t.func,
      icon: t.string
    }),
    down: t.shape({
      action: t.func,
      icon: t.string
    }),
    left: t.shape({
      action: t.func,
      icon: t.string
    }),
    center: t.shape({
      action: t.func,
      label: t.string
    })
  }).isRequired
}
