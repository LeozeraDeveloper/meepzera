import React from 'react';

import { Container, TabsContainer, TabItem, TabText, TabButton } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabButton >
          <TabItem>
            <Icon name="view-list" size={24} color="#FFF" />
            <TabText>Meu extrato</TabText>
          </TabItem>
        </TabButton>
        <TabButton >
          <TabItem>
            <Icon name="credit-card" size={24} color="#FFF" />
            <TabText>Pagar</TabText>
          </TabItem>
        </TabButton>
        <TabButton >
          <TabItem>
            <Icon name="account-balance-wallet" size={24} color="#FFF" />
            <TabText>Adicionar Fundos</TabText>
          </TabItem>
        </TabButton>
        <TabButton >
          <TabItem>
            <Icon name="share" size={24} color="#FFF" />
            <TabText>Doar</TabText>
          </TabItem>
        </TabButton>
        <TabButton >
          <TabItem>
            <Icon name="lock" size={24} color="#FFF" />
            <TabText>Bloquear Cartão</TabText>
          </TabItem>
        </TabButton>


      </TabsContainer>
    </Container>

  );


}
