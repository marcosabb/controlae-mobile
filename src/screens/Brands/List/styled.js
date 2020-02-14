import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})``

export const Content = styled.View`
  padding: ${theme('spacing.default')};
`

export const Name = styled.Text`
  font-size: 14px;
  color: ${theme('colors.text')};
`
