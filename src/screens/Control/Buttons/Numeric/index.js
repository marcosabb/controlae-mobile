import React, { useState, useCallback } from 'react'
import t from 'prop-types'

import Button from '../Button'

import { Container, Wrapper, Row } from './styled'

export default function Numeric ({
  zero, one, two, three, four, five, six, seven, eight, nine
}) {
  const [visible, setVisible] = useState(false)

  const handleToggle = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <Container>
      <Button handlePress={handleToggle} label='123' />

      {visible && (
        <Wrapper>
          <Row>
            <Button label='1' code={one} />
            <Button label='2' code={two} />
            <Button label='3' code={three} />
          </Row>

          <Row>
            <Button label='4' code={four} />
            <Button label='5' code={five} />
            <Button label='6' code={six} />
          </Row>

          <Row>
            <Button label='7' code={seven} />
            <Button label='8' code={eight} />
            <Button label='9' code={nine} />
          </Row>

          <Row center>
            <Button label='0' code={zero} />
          </Row>
        </Wrapper>
      )}
    </Container>
  )
}

Numeric.defaultProps = {
  zero: null,
  one: null,
  two: null,
  three: null,
  four: null,
  five: null,
  six: null,
  seven: null,
  eight: null,
  nine: null
}

Numeric.propTypes = {
  zero: t.string,
  one: t.string,
  two: t.string,
  three: t.string,
  four: t.string,
  five: t.string,
  six: t.string,
  seven: t.string,
  eight: t.string,
  nine: t.string
}
