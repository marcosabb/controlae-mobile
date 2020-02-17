import React from 'react'
import t from 'prop-types'

import Input from './Input'
import List from './List'

import { Container } from './styled'

export default function Brands ({ route, navigation }) {
  const { data } = route.params

  function handleNavigate (id) {
    navigation.navigate('Control', { id })
  }

  return (
    <Container>
      <Input />

      <List data={data} handleNavigate={handleNavigate} />
    </Container>
  )
}

Brands.propTypes = {
  route: t.shape({
    params: t.shape({
      data: t.array
    })
  }).isRequired,
  navigation: t.shape({
    navigate: t.func
  }).isRequired
}
