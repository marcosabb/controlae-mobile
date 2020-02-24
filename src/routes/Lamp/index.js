import React from 'react'
import t from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import useTheme from '~/hooks/theme'

import Ripple from '~/components/Ripple'

import { Content } from './styled'

const size = 40

export default function Lamp ({ tintColor }) {
  const { toggleTheme } = useTheme()

  return (
    <Ripple
      handlePress={toggleTheme}
      width={size}
      height={size}
      radius={size / 2}
      marginRight={10}
    >
      <Content>
        <Icon name='lightbulb-outline' size={22} color={tintColor} />
      </Content>
    </Ripple>
  )
}

Lamp.propTypes = {
  tintColor: t.string.isRequired
}
