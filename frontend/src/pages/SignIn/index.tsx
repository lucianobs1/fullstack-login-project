import React, { FormEvent, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { toast, Toaster } from 'react-hot-toast';

import { Container, Aside, Main } from './styles';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    try {
      if(username.trim() === ''){
        throw new Error('Username é obrigatório');
      }
      if(password.trim() === ''){
        throw new Error('Senha é obrigatório');
      }

      toast.success('Success on send form')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Any error ocurred on sign in ');
      }
    }
  }

  return (
    <Container>
      <Aside />
      <Main>
        <form onSubmit={handleSubmit}>
          <h1>Conecte-se e faça um gato feliz !!</h1>
          <input
           type="text"
           placeholder="Digite seu username"
           value={username}
           onChange={(event) => setUsername(event.target.value)}
          />
          <input
           type="password"
           placeholder="Digite sua senha"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
          />

          <Toaster
            position="top-center"
            reverseOrder={false}
          />  

          <button type="submit">Entrar</button>
        </form>
        <a href="/">
          <FiGithub size={16} />
          Não tem uma conta ? Cadastre-se
        </a>
      </Main>
    </Container>
  );
}

export { SignIn };