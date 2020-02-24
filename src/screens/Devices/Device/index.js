import React from 'react'
import t from 'prop-types'
import { Dimensions } from 'react-native'

import Ripple from '~/components/Ripple'

import { Container, Name } from './styled'

const offset = 30
const width = (Dimensions.get('window').width / 2) - offset

export default function Device ({ name, gradient, handleDevice }) {
  return (
    <Ripple
      onPress={handleDevice}
      width={width}
      height={200}
      radius={4}
      marginBottom={20}
    >
      <Container gradient={gradient}>
        <Name>{name}</Name>
      </Container>
    </Ripple>
  )
}

Device.propTypes = {
  name: t.string.isRequired,
  gradient: t.arrayOf(t.string),
  handleDevice: t.func.isRequired
}
