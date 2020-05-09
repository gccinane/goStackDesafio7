import React from 'react';
import { Text } from 'react-native';
import Header from '../../Components/Header'
 import { Container, Product, ProductList } from './styles';

export default function Main({navigation}){
  return (
      <Container>
        <Header navigation = {navigation}/>
        <ProductList data = {[{key: 'a'}, {key: "b"}]} renderItem = {({item}) => <Product></Product>} horizontal={true} />
      </Container>

  )
}

