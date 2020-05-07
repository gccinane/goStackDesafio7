import React from 'react';
import { View } from 'react-native';
import img from '../../assets/logo.png'
import { Container, Logo } from './styles';

export default function Header (){
  return (
    <Container>
      <Logo source={img} resizeMode= "stretch"/>
    </Container>
  );
}

