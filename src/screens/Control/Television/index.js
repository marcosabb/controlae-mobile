import React from 'react'
import t from 'prop-types'

import { Button, Numeric, Grouped, Rounded } from '../Buttons'

import { Container, Row } from './styled'

export default function Television ({ data }) {
  const {
    power,
    source,
    menu,
    home,
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    back,
    up,
    down,
    left,
    right,
    center,
    chup,
    chdown,
    volup,
    voldown,
    extra,
    mute
  } = data

  return (
    <Container>
      <Row>
        <Button icon='power' code={power} />
        <Button icon='source' code={source} />
        <Button icon='menu' code={menu} />
      </Row>

      <Row>
        <Button icon='home' code={home} />

        <Numeric
          zero={zero}
          one={one}
          two={two}
          three={three}
          four={four}
          five={five}
          six={six}
          seven={seven}
          eight={eight}
          nine={nine}
        />

        <Button icon='back' code={back} />
      </Row>

      <Row>
        <Rounded
          up={up}
          down={down}
          left={left}
          right={right}
          center={center}
        />
      </Row>

      <Row>
        <Grouped
          label='ch'
          up={{
            icon: 'chup',
            code: chup
          }}
          down={{
            icon: 'chdown',
            code: chdown
          }}
        />

        <Grouped
          label='vol'
          up={{
            icon: 'volup',
            code: volup
          }}
          down={{
            icon: 'voldown',
            code: voldown
          }}
        />
      </Row>

      <Row>
        <Button icon='extra' code={extra} />
        <Button icon='mute' code={mute} />
      </Row>
    </Container>
  )
}

Television.propTypes = {
  data: t.shape({
    power: t.string,
    source: t.string,
    menu: t.string,
    home: t.string,
    zero: t.string,
    one: t.string,
    two: t.string,
    three: t.string,
    four: t.string,
    five: t.string,
    six: t.string,
    seven: t.string,
    eight: t.string,
    nine: t.string,
    back: t.string,
    up: t.string,
    down: t.string,
    left: t.string,
    right: t.string,
    center: t.string,
    chup: t.string,
    chdown: t.string,
    volup: t.string,
    voldown: t.string,
    extra: t.string,
    mute: t.string
  }).isRequired
}
