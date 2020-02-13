import styled, { css } from 'styled-components/native'
import { ifProp, prop } from 'styled-tools'
import { TouchableNativeFeedback } from 'react-native'

export const Container = styled.View`
  margin-top: ${prop('marginTop')}px;
  margin-right: ${prop('marginRight')}px;
  margin-bottom: ${prop('marginBottom')}px;
  margin-left: ${prop('marginLeft')}px;
  border-radius: ${prop('radius')}px;
  overflow: hidden;

  ${ifProp('full', css`
    flex: 1;
  `, css`
    width: ${prop('width')}px;
    height: ${prop('height')}px;
  `)}
`

export const Button = styled.TouchableNativeFeedback.attrs(({ theme }) => ({
  background: TouchableNativeFeedback.Ripple(theme.colors.ripple, true),
  useForeground: true
}))``
