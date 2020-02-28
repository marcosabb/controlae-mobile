import React from 'react'
import t from 'prop-types'

import Television from './Television'

import { Container } from './styled'

const TV = 'Televisão'

export default function Control ({ route }) {
  const { type, data } = route.params

  console.log(type)

  return (
    <Container>
      {type === TV && <Television data={data} />}
    </Container>
  )
}

Control.propTypes = {
  route: t.shape({
    params: t.shape({
      type: t.string,
      data: t.shape()
    })
  }).isRequired
}
