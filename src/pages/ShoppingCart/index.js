import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";
import CartItem from "../../components/CartItem";
export default function ShoppingCart() {
  const store = useSelector((state) => state.cart);
  return (
    <Container>
      {store.items.map((item) => (
        <CartItem key={item.id} data={item} totalValue={store.totalValue} />
      ))}
    </Container>
  );
}
