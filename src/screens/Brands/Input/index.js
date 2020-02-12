import React, { useState } from 'react'

import Iconset from '~/components/Iconset'

import { Container, Icon, Field } from './styled'

export default function Input () {
  const [value, setValue] = useState()

  return (
    <Container>
      <Icon>
        <Iconset.Feather name='search' size={18} color='rgba(0, 0, 0, .6)' />
      </Icon>

      <Field
        value={value}
        onChangeText={text => setValue(text)}
        placeholder='Digite a marca'
      />
    </Container>
  )
}
