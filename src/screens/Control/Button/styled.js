import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${prop('theme.colors.grey')};
`
