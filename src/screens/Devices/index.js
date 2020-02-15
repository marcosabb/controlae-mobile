import React from 'react'
import t from 'prop-types'

import Loading from '~/components/Loading'

import List from './List'

import useFetch from '~/hooks/useFetch'

import { Container } from './styled'

export default function Devices ({ navigation }) {
  const { loading, data } = useFetch('devices')

  function handleNavigate (id) {
    navigation.navigate('Brands', { id })
  }

  return (
    <Container>
      {loading && <Loading />}

      {!loading && (
        <List
          handleNavigate={handleNavigate}
          data={data}
        />
      )}
    </Container>
  )
}

Devices.propTypes = {
  navigation: t.shape({
    navigate: t.func
  }).isRequired
}
