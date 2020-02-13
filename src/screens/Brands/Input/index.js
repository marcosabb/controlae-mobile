import React, { useState } from 'react'

import { Container, Icon, Field } from './styled'

export default function Input () {
  const [value, setValue] = useState()

  return (
    <Container>
      <Icon />

      <Field
        value={value}
        onChangeText={text => setValue(text)}
        placeholder='Digite a marca'
      />
    </Container>
  )
}
