import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { Container, Logo, Features } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const store = useSelector((state) => state.cart);
  return (
    <Container>
      <Link to="/">
        <Logo>My Store Phone</Logo>
      </Link>
      <Features>
        <Link to="/cart">
          <MdShoppingCart color="#fff" size="20px" />
          {parseInt(store.itemCount)}
        </Link>
      </Features>
    </Container>
  );
}
