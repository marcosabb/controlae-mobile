import React, { useState, useEffect, useCallback } from 'react'
import t from 'prop-types'

import Input from './Input'
import Brand from './Brand'

import { Container, List, Item, Empty } from './styled'

export default function Brands ({ route, navigation }) {
  const { data } = route.params

  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(data)

  useEffect(() => {
    setFiltered(
      search
        ? data.filter(({ name }) =>
          name.toLowerCase().includes(search.toLowerCase())
        )
        : data
    )
  }, [search])

  const handleBrand = useCallback((data) => {
    navigation.navigate('Control', { data })
  }, [])

  return (
    <Container>
      <Input
        value={search}
        handleChange={setSearch}
      />

      <List
        data={filtered}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          const { name } = item

          return (
            <Item>
              <Brand
                name={name}
                handleBrand={() => handleBrand()}
              />
            </Item>
          )
        }}
        ListEmptyComponent={
          <Item>
            <Empty>
              Nenhuma marca encontrada.
            </Empty>
          </Item>
        }
      />
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
