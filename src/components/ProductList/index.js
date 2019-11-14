import React from 'react';

 import { Container, ContainerList} from './styles';
import ListItem from '../ListItem';
import data from "../../server.json";

export default function ProductList() {
  console.log(data[0]);

  return (
    <Container>
      <ContainerList>
        {data.map(date => <ListItem data={date}/>)}
      </ContainerList>
    </Container>
  );
}