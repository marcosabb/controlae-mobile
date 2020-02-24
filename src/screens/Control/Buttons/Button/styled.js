import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme('colors.grey')};
`

export const Label = styled.Text`
  padding: ${theme('spacing.xs')};
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme('colors.text')};
`
