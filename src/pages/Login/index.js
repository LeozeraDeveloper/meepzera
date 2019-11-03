import React from 'react';

import { Container, ContentLogo, Logo, ContentInput, InputLogin, InputEnter, TextEntrar,TextForgot } from './styles';

import logo from '../../assets/logo-meep.png';

export default function Login({navigation}) {
  return (

    <Container>
      <ContentLogo>
        <Logo source={logo} />
      </ContentLogo>
      <ContentInput>
        <InputLogin placeholder="E-mail" />
        <InputLogin placeholder="Senha" />
        <TextForgot>Esqueceu a senha?</TextForgot>
        <InputEnter  onPress={() => navigation.navigate('Main')}>
          <TextEntrar>Entrar</TextEntrar>
        </InputEnter>


      </ContentInput>

    </Container>

  );

}
