import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${theme('spacing.default')};
  background: ${theme('colors.background')};
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
