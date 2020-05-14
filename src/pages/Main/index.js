import React, { Component } from 'react';
import Header from '../../Components/Header';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as CartActions from '../../store/modules/cart/actions'
import { format} from '../../util/format'
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
  _isMounted = false;
  state = {
    products: [],
  };

  componentDidMount() {
    this._isMounted = true;
    this.loadProducts();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async loadProducts() {
    const res = await api.get('/products');
    const data = res.data.map(product =>({
      ...product,
    }))
    this.setState({ products: res.data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { navigation, amount } = this.props;
    const { products } = this.state;
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
              <ProductPrice>R${item.price}</ProductPrice>
              <ProductButton onPress={()=> this.handleAddProduct(item.id)}>
                <ProductAmount>
                  <Icon
                    name="cart-plus"
                    size={20}
                    style={{ color: '#fff', top: 12 }}
                  />
                  <ProductAmountText>{amount[item.id] ||0}</ProductAmountText>
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

    amount[product.id] = product.amount;
    return amount;
  }, {})
})

export default connect(mapStateToProps,mapDispatchToProps)(Main);
