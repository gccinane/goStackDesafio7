import React, {Component} from 'react';
import Header from '../../Components/Header'
import api from '../../services/api'
import { Container, Product, ProductList, ProductImage, ProductDescription, ProductPrice, ProductButton } from './styles';

export default class Main extends Component{


  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async() =>{
    const res = await api.get(`/stock`)
    return res;
  }

  render(){

    const {navigation} = this.props;


    return (
      <Container>
        <Header navigation = {navigation}/>
        <ProductList
          data = {[{key: 'a'}, {key: "b"}]}
          horizontal={true}
          renderItem = {({item}) => (

          <Product>
            <ProductImage/>
            <ProductDescription>data.product.description</ProductDescription>
            <ProductPrice>1232132</ProductPrice>
          </Product>)}/>
      </Container>

  )
  }

}

