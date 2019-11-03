import React from 'react';
import {
  Container, Top, Title, Logo
} from './styles.js';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/meep.png';

export default function Header(){
  return(
    <Container>
      <Top>
        <Logo source={logo}/>       
      </Top>
      <Icon name="arrow-drop-down" size={20} color="#FFF"/>
      <Title>Olá Leonardo!</Title>
    </Container>
  )
}
