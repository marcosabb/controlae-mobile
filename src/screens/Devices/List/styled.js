import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { Dimensions, TouchableNativeFeedback } from 'react-native'
import { prop } from 'styled-tools'

const width = (Dimensions.get('window').width / 2) - 30

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
  padding-left: ${prop('theme.spacing.default')};
  padding-right: ${prop('theme.spacing.default')};
`

export const Item = styled.View`
  width: ${width}px;
  height: 200px;
  margin-bottom: ${prop('theme.spacing.default')};
  border-radius: ${prop('theme.radius.default')};
  overflow: hidden;
`

export const Button = styled.TouchableNativeFeedback.attrs(({ theme }) => ({
  background: TouchableNativeFeedback.Ripple(theme.colors.ripple, true),
  useForeground: true
}))``

export const Gradient = styled(LinearGradient).attrs(({ gradient }) => ({
  colors: gradient
}))`
  flex: 1;
  padding: ${prop('theme.spacing.default')};
  border-radius: ${prop('theme.radius.default')};
`

export const Name = styled.Text.attrs({
  textBreakStrategy: 'simple'
})`
  font-size: 16px;
  font-weight: bold;
  color: ${prop('theme.colors.white')};
`
