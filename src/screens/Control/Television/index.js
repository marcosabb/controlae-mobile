import React from 'react'
import t from 'prop-types'

import { Button, Numeric, Grouped, Rounded } from '../Buttons'

import { Container, Row } from './styled'

console.log(Numeric)

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

        <Numeric
          zero={power}
          one={power}
          two={power}
          three={power}
          four={power}
          five={power}
          six={power}
          seven={power}
          eight={power}
          nine={power}
        />

        <Button icon='corner-down-left' code={power} />
      </Row>

      <Row>
        <Rounded
          up={power}
          down={power}
          left={power}
          right={power}
          center={power}
        />
      </Row>

      <Row>
        <Grouped
          label='ch'
          up={{
            icon: 'chevron-up',
            code: power
          }}
          down={{
            icon: 'chevron-down',
            code: power
          }}
        />

        <Grouped
          label='vol'
          up={{
            icon: 'plus',
            code: power
          }}
          down={{
            icon: 'minus',
            code: power
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
