import React, {useReducer} from 'react';
import {reducer, initialstate} from '../../store/state';

 import { Container } from './styles';
import CartItem from '../../components/CartItem';


export default function ShoppingCart() {
  const [store, dispatch] = useReducer(reducer, initialstate);
  return (
      <Container>
      {store.items.map(item => <CartItem data={item} />)}
    </Container>
  );
}

