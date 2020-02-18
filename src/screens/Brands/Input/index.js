import React from 'react'
import t from 'prop-types'

import { Container, Icon, Field } from './styled'

export default function Input ({ value, handleChange }) {
  return (
    <Container>
      <Icon />

      <Field
        value={value}
        onChangeText={text => handleChange(text)}
        placeholder='Digite a marca'
      />
    </Container>
  )
}

Input.propTypes = {
  value: t.string.isRequired,
  handleChange: t.func.isRequired
}
