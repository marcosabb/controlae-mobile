import React from 'react'
import t from 'prop-types'

import Ripple from '~/components/Ripple'

import { Container, Name } from './styled'

export default function Brand ({ name, handleBrand }) {
  return (
    <Ripple onPress={handleBrand} full>
      <Container>
        <Name>{name}</Name>
      </Container>
    </Ripple>
  )
}

Brand.propTypes = {
  name: t.string.isRequired,
  handleBrand: t.func.isRequired
}
