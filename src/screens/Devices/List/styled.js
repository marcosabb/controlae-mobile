import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { theme } from 'styled-tools'

export const Container = styled.FlatList.attrs({
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

export const Gradient = styled(LinearGradient).attrs(({ gradient }) => ({
  colors: gradient
}))`
  flex: 1;
  padding: ${theme('spacing.default')};
`

export const Name = styled.Text.attrs({
  textBreakStrategy: 'simple'
})`
  font-size: 16px;
  font-weight: bold;
  color: ${theme('colors.white')};
`
