import React from 'react'
import t from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'

export default function Back ({ tintColor }) {
  return <Icon name='chevron-left' size={26} color={tintColor} />
}

Back.propTypes = {
  tintColor: t.string.isRequired
}
