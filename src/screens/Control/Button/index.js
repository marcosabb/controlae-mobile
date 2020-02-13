import React from 'react'
import t from 'prop-types'

import Ripple from '~/components/Ripple'

import { Content } from './styled'

// const icons = {
//   power: ['power', 'Feather'],
//   back: ['corner-down-left', 'Feather'],
//   play: ['play', 'Feather'],
//   menu: ['menu', 'Feather'],
//   disc: ['disc', 'Feather'],
//   info: ['info', 'Feather'],
//   mute: ['volume-x', 'Feather'],
//   more: ['more-horizontal', 'Feather'],
//   up: ['chevron-up', 'Feather'],
//   left: ['chevron-left', 'Feather'],
//   right: ['chevron-right', 'Feather'],
//   down: ['chevron-down', 'Feather'],
//   volumeup: ['plus', 'Feather'],
//   volumedown: ['minus', 'Feather'],
//   channelup: ['chevron-up', 'Feather'],
//   channeldown: ['chevron-down', 'Feather']
// }

const size = 60

export default function Button ({ name, children }) {
  // const [icon, set] = icons[name] || []

  // console.log(icons[name])

  // const Icon = Iconset[set]

  return (
    <Ripple width={size} height={size} radius={size / 2}>
      <Content>
        {children}
      </Content>
    </Ripple>
  )
}

Button.defaultProps = {
  name: null,
  children: undefined
}

Button.propTypes = {
  name: t.string,
  children: t.node
}
