import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 46px;
  margin: 0 ${prop('theme.spacing.default')} ${prop('theme.spacing.default')};
  padding: 0 ${prop('theme.spacing.sm')};
  background: ${prop('theme.colors.white')};
  border-radius: ${prop('theme.radius.xs')};
`

export const Icon = styled.View`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`

export const Field = styled.TextInput`
  flex: 1;
`
