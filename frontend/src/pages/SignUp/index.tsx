import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast, Toaster } from 'react-hot-toast';

import { Container, Aside, Main } from './styles';
import {  apiClient } from '../../services/apiClient';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();


  async function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    try {
      if(username.trim() === ''){
        throw new Error('Username é obrigatório');
      }
      if(password.trim() === ''){
        throw new Error('Senha é obrigatória');
      }
      if(password.length < 6) {
        throw new Error('Senha deve conter no minimo 6 digitos');
      }
      if(confirmPassword.trim() === ''){
        throw new Error('Confirmação de senha é obrigatória');
      }
      if(password !== confirmPassword) {
        throw new Error('Senhas não batem');
      }

      await apiClient.post('/users', {
        username,
        password
      });

      setUsername('');
      setPassword('');
      setConfirmPassword('');

      toast.success('Success register user');
      
      history.push('/sign-in')

    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } 
    }
  }

  return (
    <Container>
      <Aside />
      <Main>
        <form onSubmit={handleSubmit}>
          <h1>Doe ou adote um gato e faça um pet feliz !!</h1>
          <input
           name="username"
           type="text"
           placeholder="Digite seu username"
           value={username}
           onChange={(event) => setUsername(event.target.value)}
          />
          <input
           name="password"
           type="password"
           placeholder="Digite sua senha"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
          />
          <input 
            name="confim_password"
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Toaster
            position="top-center"
            reverseOrder={false}
          />  

          <button type="submit">Cadastrar</button>
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