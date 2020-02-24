import styled, { css } from 'styled-components/native'
import { theme, ifProp } from 'styled-tools'
import { Dimensions } from 'react-native'

const width = Math.round(Dimensions.get('window').width) - 40

export const Container = styled.View`
  position: relative;
  align-items: center;
`

export const Wrapper = styled.ScrollView`
  position: absolute;
  top: 60px;
  z-index: 1;
  width: ${width}px;
  padding: ${theme('spacing.default')};
  background: ${theme('colors.background')};
  border: 1px solid ${theme('colors.grey')};
  border-radius: ${theme('radius.default')};
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${theme('spacing.default')};
  z-index: 1;
  ${ifProp('center', css`
    justify-content: center;
    margin-bottom: 0;
  `, null)}
`
