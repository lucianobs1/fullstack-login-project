import styled from 'styled-components';
import loginBg from '../../assets/login-bg.svg';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const Aside = styled.aside`
  background: url(${loginBg}) no-repeat center center;
  background-size: 500px;
  min-height: 300px;
`;

export const Main = styled.main`
  align-self: center;

  h1 {
    margin-bottom: 16px;
    color: #3f3d56;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 32px;
    max-width: 500px;

    input {
      padding: 16px;

      & + input {
        margin-top: 8px;
      }

      &::placeholder{
        font-size: 14px;
        font-family: 'roboto', sans-serif;
        color: #bfbfbf;
      }
    }

    button {
      padding: 16px;
      background: #6c63ff;
      color: #fff;
      font-weight: bold;
      border: none;
      margin-top: 8px;
      transition: background-color 0.5s;

      &:hover {
        background: ${shade(0.2, '#6c63ff')}
      }
    }
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3f3d56;
    transition: color 0.5s;

    &:hover {
      color: #6c63ff;
    }

    svg {
      margin-right: 8px;
    }
  }
`;