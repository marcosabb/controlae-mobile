import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'
import { prop } from 'styled-tools'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 46px;
  margin: 0 ${prop('theme.spacing.default')};
  padding: 0 ${prop('theme.spacing.sm')};
  background: ${prop('theme.colors.grey')};
  border-radius: ${prop('theme.radius.xs')};
`

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 18,
  name: 'search',
  color: theme.colors.text
}))``

export const Field = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.placeholder
}))`
  flex: 1;
  padding: 0;
  margin-left: ${prop('theme.spacing.sm')};
  color: ${prop('theme.colors.text')};
`
