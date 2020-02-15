import React from 'react'

import Loading from '~/components/Loading'

import List from './List'

import useFetch from '~/hooks/useFetch'

import { Container } from './styled'

export default function Control () {
  const { loading, data } = useFetch('controls/1')

  const rows = (data[0] && data[0].rows) || []

  return (
    <Container>
      {loading && <Loading />}
      {(!loading || !data.length) && <List data={rows} />}
    </Container>
  )
}
