import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #262626;
  height: 100%;
  width: 100%;
`;

export const Products = styled.View`
  height: 400px;
`;

export const ProductList = styled.FlatList`
  align-self: center;
`;

export const Product = styled.View`
  width: 315px;
  height: 190px;
  padding: 6px;
  margin: 0 5px;
  background: #fff;
`;

export const ProductImage = styled.Image`
  position: relative;
  left: 4px;
  width: 100px;
  height: 100px;
`;

export const ProductDetails = styled.View`
  flex-shrink: 1;
  flex-direction: row;
`;

export const ProductDescription = styled.Text`
  color: #767676;
  margin: 20px;
  font-size: 15px;
  width: 55%;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-left: 4px;
`;

export const ProductButton = styled(RectButton)`
  height: 45px;
  background: #7159c1;
  border-radius: 5px;
  margin-top: auto;
  color: #fff;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const DeleteButton = styled(RectButton)`
  position: absolute;
  right: 10px;
  top: 30px;
`;

export const AddButton = styled(RectButton)`
  margin: 3.5px 5px 3px 0;
`;
export const RemoveButton = styled(RectButton)`
  margin: 3.5px 0 3px 3px;
`;
export const Amount = styled.Text`
  background: #fff;
  height: 60%;
  width: 60px;
  border-radius: 5px;
  text-align: center;
  padding-top: 2px;
  margin: 8px 10px;
  elevation: 4;
`;
export const ProductSubtotal = styled.Text`
  margin: 9px 40px 0 30px;
  font-weight: bold;
  font-size: 16px;
`;
export const ProductControl = styled.View`
  height: 20px;
  align-self: center;
  min-height: 40px;
  width: 94%;
  background: #ccc;
  border-radius: 5px;
  flex-direction: row;
`;
export const TotalContainer = styled.View`
  text-align: center;
  background: #fff;
  width: 315px;
  height: 150px
  align-self: center;
`;
export const TotalDecripton = styled.Text`
  margin-top: 5px;
  color: #ccc;
  font-size: 19px;
  text-align: center;
`;
export const TotalValue = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;
export const OrderButton = styled(RectButton)`
  padding: 15px;
  background: #7159c1;
  border-radius: 5px;
  margin: 0 15px 10px;
  margin-top: auto;
  color: #fff;
  align-items: center;
  justify-content: center;
`;
