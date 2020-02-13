import styled from 'styled-components/native'
import { TouchableNativeFeedback } from 'react-native'
import { prop } from 'styled-tools'

export const Container = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})``

export const Button = styled.TouchableNativeFeedback.attrs(({ theme }) => ({
  background: TouchableNativeFeedback.Ripple(theme.colors.ripple)
}))``

export const Wrapper = styled.View`
  padding: ${prop('theme.spacing.default')};
`

export const Name = styled.Text`
  font-size: 14px;
  color: ${prop('theme.colors.text')};
`
