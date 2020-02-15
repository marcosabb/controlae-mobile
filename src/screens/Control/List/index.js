import React from 'react'
import t from 'prop-types'
import { v4 } from 'uuid'

import { Button, Grouped, Rounded } from '../Buttons'

import { Container, Row } from './styled'

export default function List ({ data }) {
  return (
    <Container>
      {console.log(data)}
      {data.map(({ buttons }) => (
        <Row key={v4()}>
          {buttons.map(button => {
            if (button.type === 'button') {
              return (
                <Button
                  key={v4()}
                  icon={button.icon}
                  code={button.code}
                />
              )
            }

            if (button.type === 'rounded') {
              return (
                <Rounded
                  key={v4()}
                  buttons={button.buttons}
                />
              )
            }

            if (button.type === 'grouped') {
              return (
                <Grouped
                  key={v4()}
                  label={button.label}
                  buttons={button.buttons}
                />
              )
            }
          })}
        </Row>
      ))}
    </Container>
  )
}

List.propTypes = {
  data: t.arrayOf(t.shape()).isRequired
}
