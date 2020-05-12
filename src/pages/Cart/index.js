import React, {Component} from 'react';
import Header from '../../Components/Header'
import api from '../../services/api'
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AddIcon from 'react-native-vector-icons/MaterialIcons'
import RemoveIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
   ProductDetails,
   Container,
   Product,
   ProductList,
   ProductImage,
   ProductDescription,
    Products,
   ProductPrice,
   ButtonText,
   DeleteButton,
   AddButton,
   RemoveButton,
   Amount,
   ProductSubtotal,
   ProductControl,
   TotalContainer,
   TotalDecripton,
   TotalValue,
   OrderButton,
   } from './styles';

export default class Cart extends Component{

  state = {
    products: [],
  }



  componentDidMount(){
    this.loadProducts()
  }

  async loadProducts(){
    const res = await api.get('/products')

    this.setState({products: res.data})

  }

  render(){

   const {products} = this.state;
   const {navigation} = this.props;

    return (
      <Container>
        <Header navigation = {navigation}/>
        <Products>
          <ProductList
                data = {products}
                keyExtractor = {(product) => product.id.toString()}
                renderItem = {({item}) => (
                <Product>

                  <ProductDetails>
                    <ProductImage source={{uri: item.image}}/>
                    <ProductDescription>{item.title}</ProductDescription>
                    <ProductPrice>{item.price}</ProductPrice>
                    <DeleteButton>
                    <DeleteIcon name = "delete" size = {25} color ="#7159c1"/>
                    </DeleteButton>
                  </ProductDetails>
                  <ProductControl>

                    <RemoveButton>
                      <RemoveIcon  name = "minus" size = {30} color = "#7159c1"/>
                    </RemoveButton>

                    <Amount>3</Amount>

                    <AddButton>
                      <AddIcon  name = "add" size = {30} color = "#7159c1"/>
                    </AddButton>
                    <ProductSubtotal>
                      R$ 2131.23
                    </ProductSubtotal>
                  </ProductControl>


                </Product>)}/>
        </Products>


        <TotalContainer>
            <TotalDecripton>TOTAL</TotalDecripton>
            <TotalValue>R$432423.99</TotalValue>
          <OrderButton>
            <ButtonText>
              FINALIZAR PEDIDO
            </ButtonText>
          </OrderButton>

        </TotalContainer>

      </Container>
    );

  }

}
