import React from 'react'
import t from 'prop-types'

import { Container, Button } from './styled'

export default function Ripple ({
  onPress,
  full,
  width,
  height,
  radius,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  children
}) {
  return (
    <Container
      full={full}
      width={width}
      height={height}
      radius={radius}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      <Button onPress={onPress}>
        {children}
      </Button>
    </Container>
  )
}

Ripple.defaultProps = {
  full: false,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0
}

Ripple.propTypes = {
  onPress: t.func.isRequired,
  full: t.bool,
  width: t.number,
  height: t.number,
  radius: t.number,
  marginTop: t.number,
  marginRight: t.number,
  marginBottom: t.number,
  marginLeft: t.number,
  children: t.node.isRequired
}
