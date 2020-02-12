import styled from 'styled-components/native'
import { ifProp, prop } from 'styled-tools'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false
})`
  padding: ${prop('theme.spacing.default')} 10px;
`

export const Item = styled(RectButton).attrs({
  underlayColor: 'red'
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 120px;
  margin: 0 ${prop('theme.spacing.xs')} ${prop('theme.spacing.sm')};
  background: ${ifProp('disabled', 'rgba(0, 0, 0, .04)', prop('theme.colors.white'))};
  border-radius: ${prop('theme.radius.default')};
`

export const Icon = styled.View`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-bottom: ${prop('theme.spacing.sm')};
  background: ${prop('theme.colors.lightGrey')};
  border-radius: 25px;
`

export const Name = styled.Text`
  font-size: 14px;
  color: ${prop('theme.colors.grey')};
`
