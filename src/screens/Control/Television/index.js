import React from 'react'
import t from 'prop-types'

import { Button, Grouped, Rounded } from '../Buttons'

import { Container, Row } from './styled'

export default function Television ({ data }) {
  const {
    power
  } = data

  return (
    <Container>
      <Row>
        <Button icon='power' code={power} />
        <Button icon='tv' code={power} />
        <Button icon='menu' code={power} />
      </Row>

      <Row>
        <Button icon='home' code={power} />
        <Button icon='info' code={power} />
        <Button icon='corner-down-left' code={power} />
      </Row>

      <Row>
        <Rounded
          items={{
            up: {
              icon: 'chevron-up',
              code: power
            },
            right: {
              icon: 'chevron-right',
              code: power
            },
            down: {
              icon: 'chevron-down',
              code: power
            },
            left: {
              icon: 'chevron-left',
              code: power
            },
            center: {
              label: 'ok',
              code: power
            }
          }}
        />
      </Row>

      <Row>
        <Grouped
          label='ch'
          items={{
            up: {
              icon: 'chevron-up',
              code: power
            },
            down: {
              icon: 'chevron-down',
              code: power
            }
          }}
        />

        <Grouped
          label='vol'
          items={{
            up: {
              icon: 'plus',
              code: power
            },
            down: {
              icon: 'minus',
              code: power
            }
          }}
        />
      </Row>

      <Row>
        <Button icon='more-horizontal' code={power} />
        <Button icon='volume-x' code={power} />
      </Row>
    </Container>
  )
}

Television.propTypes = {
  data: t.shape({
    power: t.string
  })
}
