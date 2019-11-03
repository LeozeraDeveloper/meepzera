import React from 'react';

import { Container, Card, CardHeader, CardContent, Title, Description, CardContainer } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../Header';
import Tabs from '../Tabs';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
      <CardContainer>
        
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 200,65</Description>
          </CardContent>        
        </Card>

        <Card>
          <CardHeader>
            <Icon name="compare-arrows"  size={30} color="#666" />            
          </CardHeader>
          <CardContent>
            <Title>Últimas Movimentações</Title>
            <Description>Compra efetuada no valor de R$ 20,00 na Lanchonete Rio do sul</Description>
          </CardContent>        
        </Card>

        
        <Card>
          <CardHeader>
            <Icon name="store" size={28} color="#666" />            
          </CardHeader>
          <CardContent>
            <Title>Estabelecimentos frequentados</Title>
            <Description>Lachonete Rio do Sul</Description>
            <Description>Açaí Mix</Description>
            <Description>Burguer King</Description>
          </CardContent>        
        </Card>        
      
        
      </CardContainer>

    </Container>
  );


}
