import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme('colors.grey')};
`

export const GroupedContainer = styled.View`
  align-items: center;
  background: ${theme('colors.grey')};
  border-radius: ${theme('radius.md')};
`

export const RoundedContainer = styled.View`
  margin: auto;
  align-items: center;
  height: 168px;
  width: 168px;
  border-radius: 84px;
  background: ${theme('colors.grey')};
`

export const RoundedItem = styled.View`
  flex-direction: row;
`

export const Label = styled.Text`
  padding: ${theme('spacing.xs')};
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme('colors.text')};
`
