import React, {useReducer} from 'react';
import {MdShoppingCart} from 'react-icons/md';
 import { Container, Logo, Features } from './styles';
 import {Link} from 'react-router-dom';
 import {initialstate, reducer} from '../../store/state';

export default function Header({history}) {
  const [store, dispatch] = useReducer(reducer, initialstate);

  return (
   
    <Container>
     <Link to='/'><Logo>My Store Phone</Logo></Link> 
      <Features>
  <Link to='/cart'><MdShoppingCart color="#fff" size="20px"/>{store.itemCount}</Link> 
      </Features>
    </Container>
  );
}
