import React from 'react'
import t from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Ripple from '~/components/Ripple'

import { Content } from './styled'

export default function Toggle ({ tintColor }) {
  const size = 40

  return (
    <Ripple
      onPress={() => {}}
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

Toggle.propTypes = {
  tintColor: t.string.isRequired
}
