import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header';
import {bindActionCreators} from 'redux'
import api from '../../services/api';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import RemoveIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as CartActions from '../../store/modules/cart/actions'
import { formatPrice} from '../../util/format'
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
  TotalDescripton,
  TotalValue,
  OrderButton,
} from './styles';

class Cart extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  decrement(product){
    this.handleUpdate(product.amount -1, product.id)
  }

  increment(product){
   this.handleUpdate(product.amount +1, product.id)
  }

  handleUpdate = (value, id) =>{
    const {updateAmountRequest} = this.props;
    updateAmountRequest(id,value);
  }
  async loadProducts() {
    const res = await api.get('/products');

    this.setState({ products: res.data });
  }

  handleDelete = id =>{
    const {removeFromCart} = this.props;
    removeFromCart(id)
  }

  render() {

    const { navigation, cart, total } = this.props;

    return (
      <Container>
        <Header navigation={navigation} />
        <Products>
          <ProductList
            data={cart}
            keyExtractor={product => product.id.toString()}
            renderItem={({ item }) => (
              <Product>
                <ProductDetails>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductDescription>{item.title}</ProductDescription>
                  <ProductPrice>{item.price}</ProductPrice>
                  <DeleteButton onPress = {() => this.handleDelete(item.id)}>
                    <DeleteIcon name="delete" size={25} color="#7159c1" />
                  </DeleteButton>
                </ProductDetails>
                <ProductControl>
                  <RemoveButton onPress = {() => this.decrement(item)}>
                    <RemoveIcon name="minus" size={30} color="#7159c1" />
                  </RemoveButton>

                  <Amount>{item.amount}</Amount>

                  <AddButton onPress = {() => this.increment(item)}>
                    <AddIcon name="add" size={30} color="#7159c1" />
                  </AddButton>
                  <ProductSubtotal maxLength = {10}>R${item.subtotal}</ProductSubtotal>
                </ProductControl>
              </Product>
            )}
          />
        </Products>

        <TotalContainer>
          <TotalDescripton>TOTAL</TotalDescripton>
            <TotalValue maxLength = {8}>R${total}</TotalValue>
          <OrderButton>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </OrderButton>
        </TotalContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total, product) =>{
    return total + product.price*product.amount
  }, 0)
})

const mapDispatchToProps = dispatch =>{

  return bindActionCreators(CartActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
