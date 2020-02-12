import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { Dimensions } from 'react-native'
import { prop } from 'styled-tools'
import { RectButton } from 'react-native-gesture-handler'

const width = (Dimensions.get('window').width / 2) - 30

export const Container = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  columnWrapperStyle: {
    justifyContent: 'space-between'
  }
})`
  flex: 1;
  padding: ${prop('theme.spacing.default')};
`

export const Item = styled(LinearGradient).attrs(({ gradient }) => ({
  colors: gradient
}))`
  width: ${width}px;
  height: 200px;
  margin-bottom: ${prop('theme.spacing.default')};
  border-radius: ${prop('theme.radius.default')};
`

export const Wrapper = styled(RectButton)`
  flex: 1;
  padding: ${prop('theme.spacing.default')};
  background: rgba(0, 0, 0, 0.01);
  border-radius: ${prop('theme.radius.default')};
`

export const Name = styled.Text.attrs({
  textBreakStrategy: 'simple'
})`
  font-size: 16px;
  font-weight: bold;
  color: ${prop('theme.colors.white')};
`
