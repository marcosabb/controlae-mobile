import React from 'react'

import Iconset from '~/components/Iconset'

import { Container, Item, Icon, Name } from './styled'

const data = [
  { id: 1, name: 'TV' },
  { id: 2, name: 'Ventilador' }
]

export default function List () {
  return (
    <Container
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => {
        const { name } = item

        return (
          <Item>
            <Icon>
              <Iconset.Feather name='tv' size={22} color='#3846DC' />
            </Icon>
            <Name>{name}</Name>
          </Item>
        )
      }}
    />
  )
}
