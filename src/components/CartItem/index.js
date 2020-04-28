import React, { useState, useEffect } from "react";
import {
  Container,
  Picture,
  Content,
  Title,
  Quantity,
  Value,
  ButtonModify,
  ButtonGroup,
  Price,
} from "./styles";
export default function CartItem({ data }) {
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setPrice(data.offers.lowPrice);
    setCount(1);
  }, [data]);

  async function handleSum(value) {
    const number = count + value;
    if (number >= 0) {
      setCount(number);
      const total = data.offers.lowPrice * number;
      setPrice(total);
    }
  }
  return (
    <Container>
      <Picture src={data.image} alt="Image picture" />
      <Content>
        <Title>{data.description}</Title>
      </Content>
      <Quantity>
        <Title>Quantidade</Title>
        <ButtonGroup>
          <ButtonModify onClick={() => handleSum(1)}>+</ButtonModify>
          <Value>{count}</Value>
          <ButtonModify onClick={() => handleSum(-1)}>-</ButtonModify>
        </ButtonGroup>
      </Quantity>

      <Price>
        <Title style={{ color: "#333" }}>Preço</Title>
        <Title style={{ color: "#00aa00" }}>{price}</Title>
      </Price>
    </Container>
  );
}
