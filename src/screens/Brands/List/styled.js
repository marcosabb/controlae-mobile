import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Container = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})``

export const Content = styled.View`
  padding: ${prop('theme.spacing.default')};
`

export const Name = styled.Text`
  font-size: 14px;
  color: ${prop('theme.colors.text')};
`
