import React, {Component} from 'react';
import Header from '../../Components/Header'
import api from '../../services/api'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Product, ProductList, ProductImage, ProductDescription, ProductPrice, ProductButton, ButtonText, ProductAmount, ProductAmountText } from './styles';

export default class Main extends Component{
  state = {
    products: [],
  }


  componentDidMount(){
    this.loadProducts()
  }
  async loadProducts() {
    const res = await api.get('/products');
    this.setState({products: res.data})

  }

  render(){

    const {navigation} = this.props;
    const { products}  = this.state;


    return (
      <Container>
        <Header navigation = {navigation}/>
        <ProductList
          data = {products}
          horizontal={true}
          keyExtractor = {(product) => product.id.toString()}
          renderItem = {({item}) => (

          <Product>
            <ProductImage source={{uri: item.image}}/>
            <ProductDescription>{item.title}</ProductDescription>
            <ProductPrice>{item.price}</ProductPrice>
            <ProductButton>
              <ProductAmount>
                <Icon name = "cart-plus" size = {20} style= {{color:"#fff", top: 12}}/>
                <ProductAmountText>2</ProductAmountText>
              </ProductAmount>

              <ButtonText>
                ADICIONAR
              </ButtonText>
            </ProductButton>
          </Product>)}/>
      </Container>

  )
  }

}

