import React from 'react';

 import { Container, ContainerList} from './styles';
import ListItem from '../../components/ListItem';
import data from "../../server.json";


export default function ProductList() {
  

  return (
    <>
    <Container>
      <ContainerList>
        {data.map(date => <ListItem key={date.id} data={date}/>)}
      </ContainerList>
    </Container>
    </>
  );
}