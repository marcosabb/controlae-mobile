import React from 'react'
import t from 'prop-types'

import { Container } from './styled'

export default function Background ({ children }) {
  return (
    <Container>{children}</Container>
  )
}

Background.propTypes = {
  children: t.node.isRequired
}
