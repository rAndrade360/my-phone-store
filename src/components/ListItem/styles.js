import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 20px  #0004;
        border-radius: 4px;
    }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const Title = styled.h3`
  
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

export const HighPrice = styled.p`
  font-size: 13px;
  color: #888;
`;

export const LowPrice = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const Footer = styled.footer`
  flex: 1;
  margin-top: 4px;
`;

export const ButtonAdd = styled.button`
  border: 0;
  background-color: #ffaa00;
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
  &:hover{
    background-color: #ffee00;
  }
`;

export const ButtonDel = styled.button`
  border: 0;
  background-color: #ff2200;
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
  &:hover{
    background-color: #ff3333;
  }
`;