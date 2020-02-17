import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  background: ${theme('colors.background')};
`

export const List = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 20
  },
  columnWrapperStyle: {
    justifyContent: 'space-between'
  }
})`
  flex: 1;
  padding-left: ${theme('spacing.default')};
  padding-right: ${theme('spacing.default')};
`
