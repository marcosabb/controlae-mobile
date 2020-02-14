import React from 'react'
import { v4 } from 'uuid'

import { transmit } from '~/services/infrared'

import { Button, Grouped, Rounded } from './Buttons'

import { Container, Row } from './styled'

const power = '0000 006d 0022 0003 00a9 00a8 0015 003f 0015 003f 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 003f 0015 003f 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0040 0015 0015 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 0702 00a9 00a8 0015 0015 0015 0e6e'

const data = [
  {
    id: v4(),
    buttons: [
      { id: v4(), type: 'button', icon: 'power', action: () => transmit(power) },
      { id: v4(), type: 'button', icon: 'tv', action: () => {} },
      { id: v4(), type: 'button', icon: 'menu', action: () => {} }
    ]
  },
  {
    id: v4(),
    buttons: [
      { id: v4(), type: 'button', icon: 'home', action: () => {} },
      { id: v4(), type: 'button', icon: 'info', action: () => {} },
      { id: v4(), type: 'button', icon: 'corner-down-left', action: () => {} }
    ]
  },
  {
    id: v4(),
    buttons: [
      {
        id: v4(),
        type: 'rounded',
        buttons: {
          up: {
            action: () => {},
            icon: 'chevron-up'
          },
          right: {
            action: () => {},
            icon: 'chevron-right'
          },
          down: {
            action: () => {},
            icon: 'chevron-down'
          },
          left: {
            action: () => {},
            icon: 'chevron-left'
          },
          center: {
            action: () => {},
            label: 'ok'
          }
        }
      }
    ]
  },
  {
    id: v4(),
    buttons: [
      {
        id: v4(),
        type: 'grouped',
        label: 'ch',
        buttons: {
          up: {
            action: () => {},
            icon: 'chevron-up'
          },
          down: {
            action: () => {},
            icon: 'chevron-down'
          }
        }
      },
      {
        id: v4(),
        type: 'grouped',
        label: 'vol',
        buttons: {
          up: {
            action: () => {},
            icon: 'plus'
          },
          down: {
            action: () => {},
            icon: 'minus'
          }
        }
      }
    ]
  },
  {
    id: v4(),
    buttons: [
      { id: v4(), type: 'button', icon: 'more-horizontal', action: () => {} },
      { id: v4(), type: 'button', icon: 'volume-x', action: () => {} }
    ]
  }
]

export default function Control () {
  return (
    <Container>
      {data.map(({ id, buttons }) => (
        <Row key={id}>
          {buttons.map(button => {
            if (button.type === 'button') {
              return (
                <Button
                  key={button.id}
                  icon={button.icon}
                  onPress={() => { button.action() }}
                />
              )
            }

            if (button.type === 'rounded') {
              return (
                <Rounded
                  key={button.id}
                  buttons={button.buttons}
                />
              )
            }

            if (button.type === 'grouped') {
              return (
                <Grouped
                  key={button.id}
                  label={button.label}
                  buttons={button.buttons}
                />
              )
            }
          })}
        </Row>
      ))}
    </Container>
  )
}
