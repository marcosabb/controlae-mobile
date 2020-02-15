import React from 'react'
import t from 'prop-types'

import Ripple from '~/components/Ripple'

import { Container, Content, Name } from './styled'

export default function List ({ data, handleNavigate }) {
  return (
    <Container
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => {
        const { id, name } = item

        return (
          <Ripple
            onPress={() => handleNavigate(id)}
            radius={0}
            full
          >
            <Content>
              <Name>{name}</Name>
            </Content>
          </Ripple>
        )
      }}
      ListEmptyComponent={() => (
        <Content>
          <Name>Nenhuma marca disponível para esse dispositivo.</Name>
        </Content>
      )}
    />
  )
}

List.propTypes = {
  data: t.arrayOf(t.shape({
    id: t.number,
    name: t.string
  })).isRequired,
  handleNavigate: t.func.isRequired
}
