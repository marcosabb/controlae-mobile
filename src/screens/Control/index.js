import React from 'react'

import Button from './Button'

import { Container, Wrapper, Row, Group, Rounded, Item, Label } from './styled'

export default function Control () {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Button name='power' />

          <Button name='play' />

          <Button name='menu' />
        </Row>

        <Row>
          <Button name='disc' />

          <Button name='info' />

          <Button name='back' />
        </Row>

        <Row>
          <Group>
            <Button name='channelup' />

            <Label>CH</Label>

            <Button name='channeldown' />
          </Group>

          <Group>
            <Button name='volumeup' />

            <Label>VOL</Label>

            <Button name='volumedown' />
          </Group>
        </Row>

        <Row>
          <Rounded>
            <Item>
              <Button name='up' />
            </Item>

            <Item>
              <Button name='left' />

              <Button>
                <Label>OK</Label>
              </Button>

              <Button name='right' />
            </Item>

            <Item>
              <Button name='down' />
            </Item>
          </Rounded>
        </Row>

        <Row>
          <Button name='more' />
          <Button name='mute' />
        </Row>
      </Wrapper>
    </Container>
  )
}
