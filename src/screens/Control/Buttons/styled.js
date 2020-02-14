import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${prop('theme.colors.grey')};
`

export const GroupedContainer = styled.View`
  align-items: center;
  background: ${prop('theme.colors.grey')};
  border-radius: ${prop('theme.radius.md')};
`

export const RoundedContainer = styled.View`
  margin: auto;
  align-items: center;
  height: 168px;
  width: 168px;
  border-radius: 84px;
  background: ${prop('theme.colors.grey')};
`

export const RoundedItem = styled.View`
  flex-direction: row;
`

export const Label = styled.Text`
  padding: ${prop('theme.spacing.xs')};
  font-size: 14px;
  text-transform: uppercase;
  color: ${prop('theme.colors.text')};
`
