import React from 'react'
import t from 'prop-types'

import { Container, Button, Wrapper, Name } from './styled'

const data = [
  { id: 1, name: 'Samsung' },
  { id: 2, name: 'LG' },
  { id: 3, name: 'Sony' },
  { id: 4, name: 'Xiaomi' },
  { id: 5, name: 'Philco' },
  { id: 6, name: 'CCE' },
  { id: 7, name: 'Samsung' },
  { id: 8, name: 'LG' },
  { id: 9, name: 'Sony' },
  { id: 10, name: 'Xiaomi' },
  { id: 11, name: 'Philco' },
  { id: 12, name: 'CCE' },
  { id: 13, name: 'Samsung' },
  { id: 14, name: 'LG' },
  { id: 15, name: 'Sony' },
  { id: 16, name: 'Xiaomi' },
  { id: 17, name: 'Philco' },
  { id: 18, name: 'CCE' },
  { id: 19, name: 'Samsung' },
  { id: 20, name: 'LG' },
  { id: 21, name: 'Sony' },
  { id: 22, name: 'Xiaomi' },
  { id: 23, name: 'Philco' },
  { id: 24, name: 'CCE' }
]

export default function List ({ handleNavigate }) {
  return (
    <Container
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => {
        const { name } = item

        return (
          <Button onPress={handleNavigate}>
            <Wrapper>
              <Name>{name}</Name>
            </Wrapper>
          </Button>
        )
      }}
    />
  )
}

List.propTypes = {
  handleNavigate: t.func.isRequired
}
