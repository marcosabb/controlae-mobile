import React from 'react'
import t from 'prop-types'

import Button from '../Button'

import {
  Container,
  Label
} from './styled'

export default function Grouped ({ label, up, down }) {
  return (
    <Container>
      <Button icon={up.icon} code={up.code} />
      <Label>{label}</Label>
      <Button icon={down.icon} code={down.code} />
    </Container>
  )
}

Grouped.propTypes = {
  up: null,
  down: null
}

Grouped.propTypes = {
  label: t.string.isRequired,
  up: t.shape({
    icon: t.string,
    code: t.string
  }),
  down: t.shape({
    icon: t.string,
    code: t.string
  })
}
