import {call,select, put, all, takeLatest} from 'redux-saga/effects'
import api from '../../../services/api'
import {addToCartSuccess, updateAmountSuccess} from './actions'

function* addToCart({id}){

  const productExists = yield select(
    state => state.cart.find(p => p.id === id)
  )

  const stock = yield call(api.get, `/stock/${id}`)
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0

  const amount = currentAmount +1;

  if(amount > stockAmount) {
    alert("Quantidade máxima solicitada em estoque atingida.");
    return;
  }
  if(productExists){
    yield put(updateAmountSuccess(id, amount))
  }else{
    const res = yield call(api.get,`products/${id}`)
    const data = {
      ...res.data,
      amount: 1,
    }
    yield put(addToCartSuccess(data));
  }

}

export function* updateAmount({id, amount}){
  if(amount <= 0) {
    return;
  }

  const stock = yield call(api.get, `stock/${id}`);
    const stockAmount = stock.data.amount;

    if(amount > stockAmount){
      alert("Quantidade máxima solicitada em estoque atingida.");
      return;
    }
  yield put(updateAmountSuccess(id, amount))
}


export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
])
