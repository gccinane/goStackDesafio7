import React from 'react';
import { Text } from 'react-native';
import Header from '../../Components/Header'
 import { Container, Product } from './styles';

export default function Main({navigation}){
  return (
    <>
      <Header navigation = {navigation}/>
      <Container>

        <Product>

        </Product>
        <Product>
          tenis
        </Product>

      </Container>
    </>
  )
}

