import React from 'react';
import { Container, Picture, Content, Title } from './styles';


export default function CartItem({data}) {
 

  return (
    <Container>
      <Picture src={data.image} alt="Image picture" />
      <Content>
          <Title>{data.description}</Title>
      </Content>
    </Container>
  );
}
