import React from 'react';

import logoImg from '../../assets/logo.svg';
import noteImg from '../../assets/note.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

function Login() {
  return (
    <Container>
      <Content>
        <header>
          <img src={logoImg} alt="Abstract" />

          <div>
            <h1>Bem vindo!</h1>
            <span>Faça o seu login</span>
          </div>
        </header>

        <form>
          <Input label="E-mail" />
          <Input label="Senha" />

          <span>
            <a href="/">Esqueci minha senha</a>
          </span>

          <Button type="submit">Entrar</Button>
        </form>

        <span>
          Não tem cadastro?
          <a href="/"> Clique aqui</a>
        </span>
      </Content>

      <Background>
        <img src={noteImg} alt="Notebook" />
      </Background>
    </Container>
  );
}

export default Login;
