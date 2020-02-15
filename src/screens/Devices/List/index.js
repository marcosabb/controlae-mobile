import React from 'react'
import t from 'prop-types'
import { Dimensions } from 'react-native'

import Ripple from '~/components/Ripple'

import { Container, Gradient, Name } from './styled'

const offset = 30
const width = (Dimensions.get('window').width / 2) - offset

// const data = [
//   {
//     id: 1,
//     name: 'Televisão',
//     gradient: ['#1e3c72', '#2a5298']
//   },
//   {
//     id: 2,
//     name: 'Ar condicionado',
//     gradient: ['#eb3349', '#f45c43']
//   },
//   {
//     id: 3,
//     name: 'Ventilador',
//     gradient: ['#48b1bf', '#06beb6']
//   },
//   {
//     id: 4,
//     name: 'Smart Box',
//     gradient: ['#29323c', '#485563']
//   },
//   {
//     id: 5,
//     name: 'Receptor A/V',
//     gradient: ['#ff758c', '#ff7eb3']
//   }
// ]

export default function List ({ data, handleNavigate }) {
  return (
    <Container
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => {
        const { id, name, gradient } = item

        return (
          <Ripple
            onPress={() => handleNavigate(id)}
            width={width}
            height={200}
            radius={16}
            marginBottom={20}
          >
            <Gradient gradient={gradient}>
              <Name>{name}</Name>
            </Gradient>
          </Ripple>
        )
      }}
    />
  )
}

List.propTypes = {
  data: t.arrayOf(t.shape({
    id: t.number,
    name: t.string,
    gradient: t.arrayOf(t.string)
  })).isRequired,
  handleNavigate: t.func.isRequired
}
