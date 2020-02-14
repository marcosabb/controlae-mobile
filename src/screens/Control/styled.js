import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${prop('theme.spacing.default')} ${prop('theme.spacing.lg')};
  background: ${prop('theme.colors.white')};
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
