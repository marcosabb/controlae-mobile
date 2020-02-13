import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 46px;
  margin: 0 ${prop('theme.spacing.default')};
  padding: 0 ${prop('theme.spacing.default')};
  background: ${prop('theme.colors.grey')};
  border-radius: ${prop('theme.radius.xs')};
`

export const Field = styled.TextInput`
  flex: 1;
  color: ${prop('theme.colors.text')};
`
