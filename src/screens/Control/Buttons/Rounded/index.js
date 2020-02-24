import React from 'react'
import t from 'prop-types'

import Button from '../Button'

import { Container, Row } from './styled'

export default function Rounded ({ up, right, down, left, center }) {
  return (
    <Container>
      <Row>
        <Button icon='chevron-up' code={up} />
      </Row>

      <Row>
        <Button icon='chevron-left' code={left} />
        <Button label='ok' code={center} />
        <Button icon='chevron-right' code={right} />
      </Row>

      <Row>
        <Button icon='chevron-down' code={down} />
      </Row>
    </Container>
  )
}

Rounded.defaultProps = {
  up: null,
  right: null,
  down: null,
  left: null,
  center: null
}

Rounded.propTypes = {
  up: t.string,
  right: t.string,
  down: t.string,
  left: t.string,
  center: t.string
}
