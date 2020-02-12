import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  padding: ${prop('theme.spacing.default')} 0;
  background: ${prop('theme.colors.background')};
`
