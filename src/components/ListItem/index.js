import React from 'react';

import { Container, Picture, Description, HighPrice, LowPrice, Footer } from './styles';

export default function ListItem({data}) {
  return (
    <Container>
        <Picture src={data.image} alt="Imagem celular" />
        <Footer> 
        <Description>{data.name}</Description>
        <HighPrice>de R$ {(data.offers.highPrice).toLocaleString('pt-BR', {style: 'currency', currency: data.offers.priceCurrency})} por</HighPrice>
        <LowPrice>R$ {(data.offers.lowPrice).toLocaleString('pt-BR')}</LowPrice>
        </Footer>
    </Container>
  );
}
