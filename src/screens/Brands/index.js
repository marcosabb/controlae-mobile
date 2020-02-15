import React from 'react'
import t from 'prop-types'

import Loading from '~/components/Loading'

import Input from './Input'
import List from './List'

import useFetch from '~/hooks/useFetch'

import { Container } from './styled'

export default function Brands ({ route, navigation }) {
  const { id } = route.params
  const { loading, data } = useFetch(`brands/${id}`)

  function handleNavigate (id) {
    navigation.navigate('Control', { id })
  }

  return (
    <Container>
      <Input />

      {loading && <Loading />}
      {!loading && <List data={data} handleNavigate={handleNavigate} />}
    </Container>
  )
}

Brands.propTypes = {
  route: t.shape({
    params: t.shape({
      id: t.number
    })
  }).isRequired,
  navigation: t.shape({
    navigate: t.func
  }).isRequired
}
