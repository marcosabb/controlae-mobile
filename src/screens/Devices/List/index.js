import React from 'react'

import { Container, Item, Wrapper, Name } from './styled'

const data = [
  {
    id: 1,
    name: 'Televisão',
    gradient: ['#d66d75', '#e29587']
  },
  {
    id: 2,
    name: 'Ar condicionado',
    gradient: ['#eb3349', '#f45c43']
  },
  {
    id: 3,
    name: 'Ventilador',
    gradient: ['#48b1bf', '#06beb6']
  }
]

export default function List () {
  return (
    <Container
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => {
        const { gradient, name } = item
        return (
          <Item gradient={gradient}>
            <Wrapper>
              <Name>{name}</Name>
            </Wrapper>
          </Item>
        )
      }}
    />
  )
}
