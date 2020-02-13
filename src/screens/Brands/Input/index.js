import React, { useState } from 'react'

import { Container, Field } from './styled'

export default function Input () {
  const [value, setValue] = useState()

  return (
    <Container>
      <Field
        value={value}
        onChangeText={text => setValue(text)}
        placeholder='Digite a marca'
      />
    </Container>
  )
}
