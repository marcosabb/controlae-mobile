import styled from 'styled-components/native'
import { prop } from 'styled-tools'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background: ${prop('theme.colors.lightGrey')};
`
