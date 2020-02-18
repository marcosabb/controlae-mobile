import React from 'react'
import t from 'prop-types'

import Television from './Television'

import { Container } from './styled'

export default function Control ({ route }) {
  const { data } = route.params

  return (
    <Container>
      {data.type === 'tv' && <Television data={data} />}
    </Container>
  )
}

Control.propTypes = {
  route: t.shape({
    params: t.shape({
      data: t.shape()
    })
  }).isRequired
}
