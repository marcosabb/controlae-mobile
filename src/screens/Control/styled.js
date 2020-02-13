import styled from 'styled-components/native'
import { prop } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  background: ${prop('theme.colors.background')};
`

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${prop('theme.spacing.default')};
  background: ${prop('theme.colors.white')};
  border-top-left-radius: ${prop('theme.radius.md')};
  border-top-right-radius: ${prop('theme.radius.md')};
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${prop('theme.spacing.default')};
`

export const Group = styled.View`
  align-items: center;
  background: ${prop('theme.colors.lightGrey')};
  border-radius: ${prop('theme.radius.md')};
`

export const Rounded = styled.View`
  margin: auto;
  align-items: center;
  height: 164px;
  width: 164px;
  background: red;
  border-radius: 82px;
  background: ${prop('theme.colors.lightGrey')};
`

export const Item = styled.View`
  flex-direction: row;
`

export const Label = styled.Text``
