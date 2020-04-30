import React, { useState, useEffect } from "react";
import { addItem, removeItem } from "../../store/ducks/cart/cart";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Picture,
  Description,
  HighPrice,
  LowPrice,
  Footer,
  ButtonAdd,
  ButtonDel,
} from "./styles";

export default function ListItem({ data }) {
  const store = useSelector((state) => state.cart);
  const [stored, setStored] = useState(store.items.includes(data));
  const dispatch = useDispatch();

  useEffect(() => {
    store.items.map((item) => {
      if (item.id === data.id) {
        setStored(true);
      }
      return null;
    });
  }, [store, stored, data]);

  async function handleAdd() {
    dispatch(addItem(data));
    setStored(true);
  }

  async function handleDel() {
    dispatch(removeItem(data));
    setStored(false);
  }

  return (
    <Container>
      <Picture src={data.image} alt="Imagem celular" />
      <Footer>
        <Description>{data.name}</Description>
        <HighPrice>
          de R${" "}
          {data.offers.highPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: data.offers.priceCurrency,
          })}{" "}
          por
        </HighPrice>
        <LowPrice>R$ {data.offers.lowPrice.toLocaleString("pt-BR")}</LowPrice>
      </Footer>
      {stored ? (
        <ButtonDel onClick={handleDel}>Remover do Carrinho</ButtonDel>
      ) : (
        <ButtonAdd onClick={handleAdd}>Adicionar ao Carrinho</ButtonAdd>
      )}
    </Container>
  );
}
