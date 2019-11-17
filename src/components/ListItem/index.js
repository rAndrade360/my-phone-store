import React, {useReducer, useState, useEffect} from 'react';
import {initialstate, reducer} from '../../store/state';

import { Container, Picture, Description, HighPrice, LowPrice, Footer, ButtonAdd, ButtonDel } from './styles';


export default function ListItem({data}) {
  const [store, dispatch] = useReducer(reducer, initialstate);
  const [stored, setStored] = useState(false);

  useEffect(() => {
    store.items.includes(data)?setStored(true):setStored(false);
  }, [])

 async function handleAdd(){
    await dispatch({type:'add', item: data });
    console.log(store);
    setStored(true)
  }

async  function handleDel(){
    await dispatch({type:'remove', item: data });
    console.log(store);
    setStored(false)
  }

  return (
    <Container>
        <Picture src={data.image} alt="Imagem celular" />
        <Footer> 
        <Description>{data.name}</Description>
        <HighPrice>de R$ {(data.offers.highPrice).toLocaleString('pt-BR', {style: 'currency', currency: data.offers.priceCurrency})} por</HighPrice>
        <LowPrice>R$ {(data.offers.lowPrice).toLocaleString('pt-BR')}</LowPrice>
        </Footer>
        {
          stored ?
        <ButtonDel onClick={handleDel}>Revover do Carrinho</ButtonDel>:
        <ButtonAdd onClick={handleAdd}>Adicionar ao Carrinho</ButtonAdd>
}

    </Container>
  );
}
