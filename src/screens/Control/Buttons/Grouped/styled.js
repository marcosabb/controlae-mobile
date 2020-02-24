import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View`
  align-items: center;
  background: ${theme('colors.grey')};
  border-radius: ${theme('radius.md')};
`

export const Label = styled.Text`
  padding: ${theme('spacing.xs')};
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme('colors.text')};
`
