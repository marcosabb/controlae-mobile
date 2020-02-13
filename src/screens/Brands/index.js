import React from 'react'
import t from 'prop-types'

import Input from './Input'
import List from './List'

import { Container } from './styled'

export default function Brands ({ navigation }) {
  function handleNavigate () {
    navigation.navigate('Control')
  }

  return (
    <Container>
      <Input />
      <List handleNavigate={handleNavigate} />
    </Container>
  )
}

Brands.propTypes = {
  navigation: t.shape({
    navigate: t.func
  }).isRequired
}
