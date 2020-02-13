import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  padding-top: ${prop('theme.spacing.default')};
  background: ${prop('theme.colors.background')};
`
