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
        ? data.filter(({ brand }) =>
          brand.toLowerCase().includes(search.toLowerCase())
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
          const { brand, control } = item

          return (
            <Item>
              <Brand
                name={brand}
                handleBrand={() => handleBrand(control)}
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
      data: t.arrayOf(t.shape({
        _id: t.string,
        brand: t.string
      }))
    })
  }).isRequired,
  navigation: t.shape({
    navigate: t.func
  }).isRequired
}
