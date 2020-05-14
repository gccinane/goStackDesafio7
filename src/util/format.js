import 'intl'
import 'intl/locale-data/jsonp/en';

export const  {format} = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})
