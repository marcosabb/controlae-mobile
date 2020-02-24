import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View`
  margin: auto;
  align-items: center;
  height: 168px;
  width: 168px;
  border-radius: 84px;
  background: ${theme('colors.grey')};
`

export const Row = styled.View`
  flex-direction: row;
`
