import React from 'react';
import img from '../../assets/logo.png'
import { Container, Logo, LogoButton, IconButton } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Header ({navigation}){

  function handleNavigate(page){
    navigation.navigate(page);
  }


  return (
    <Container>
      <LogoButton onPress = {() => handleNavigate('Main')}>
        <Logo source={img} resizeMode= "stretch"/>
      </LogoButton>


      <IconButton onPress = {() => handleNavigate('Cart')}>
        <Icon name="cart" size={35} color="#eee" style = {{position: "relative", marginLeft: 95, marginTop: 5}}/>
      </IconButton>

    </Container>
  );
}

