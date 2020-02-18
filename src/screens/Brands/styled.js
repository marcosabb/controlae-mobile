import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  padding-top: ${theme('spacing.default')};
  background: ${theme('colors.background')};
`

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})``

export const Item = styled.View``

export const Empty = styled.Text`
  padding: ${theme('spacing.default')};
  font-size: 14px;
  color: ${theme('colors.placeholder')};
`
