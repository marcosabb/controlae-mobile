import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  padding: ${theme('spacing.default')};
  background: ${theme('colors.background')};
`
