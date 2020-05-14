import React, { Component } from 'react';
import Header from '../../Components/Header';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as CartActions from '../../store/modules/cart/actions'

import {
  Container,
  Product,
  ProductList,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ProductButton,
  ButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  async loadProducts() {
    const res = await api.get('/products');
    this.setState({ products: res.data });
  }

  handleAddProduct = product => {
    const { addTocart } = this.props;

    addTocart(product);
  };

  render() {
    const { navigation, amount } = this.props;
    const { products } = this.state;
    console.tron.log(amount)
    return (
      <Container>
        <Header navigation={navigation} />
        <ProductList
          data={products}
          horizontal={true}
          keyExtractor={product => product.id.toString()}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductDescription>{item.title}</ProductDescription>
              <ProductPrice>{item.price}</ProductPrice>
              <ProductButton onPress={()=> this.handleAddProduct(item)}>
                <ProductAmount>
                  <Icon
                    name="cart-plus"
                    size={20}
                    style={{ color: '#fff', top: 12 }}
                  />
                  <ProductAmountText>{amount}</ProductAmountText>
                </ProductAmount>

                <ButtonText>ADICIONAR</ButtonText>
              </ProductButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(CartActions, dispatch)
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
   return ([amount, product.id] = product.amount);
  }, {})
})

export default connect(mapStateToProps,mapDispatchToProps)(Main);
