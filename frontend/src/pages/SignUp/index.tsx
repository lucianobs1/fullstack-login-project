import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Aside, Main } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Aside />
      <Main>
        <form>
          <h1>Doe ou adote um gato e faça um pet feliz !!</h1>
          <input type="text" placeholder="Digite seu username"/>
          <input type="password" placeholder="Digite sua senha"/>
          <button>Cadastrar</button>
        </form>
        <a href="/sign-in">
          <FiArrowLeft size={16} />
          Já tenho uma conta
        </a>
      </Main>
    </Container>
  );
}

export { SignUp };