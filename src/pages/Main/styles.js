import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'
import { darken } from 'polished'

export const Container = styled.View`

  background: #262626;
  height: 100%;
  width: 100%
`;


export const Product = styled.View`

  width: 215px;
  height: 350px;
  padding: 6px;
  margin: 5px 30px;
  background: #fff;
  border-radius: 5px;
`

export const ProductList = styled.FlatList`
`;
export const ProductImage = styled.Image`
  width: auto;
  height: 63%;
`

export const ProductDescription = styled.Text`
  color: #767676;
  margin: 5px;
  font-size: 15px;
  margin-bottom: auto;

`

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 0 3px;
`

export const ProductButton = styled(RectButton)`
  height: 45px;
  background: #7159c1;
  border-radius: 5px;
  margin-top: auto;
  flex-direction: row;
  color: #fff;

`

export const ProductAmount = styled.View`
  background: ${darken(0.03, "#7159c1")}
  flex-direction: row;
  border-radius: 5px;
  padding: 0 10px;

`

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-top: 13px;
  margin-left: 5px;
`

export const ButtonText = styled.Text`
  margin-left: 35px;
  font-size: 14px;
  align-self: center;
  color: #fff;
  font-weight: bold;
`
