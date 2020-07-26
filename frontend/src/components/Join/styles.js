import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background: url(${background}) no-repeat bottom;
  background-size: 100%;
`;

export const Main = styled.div`
  width: 25%;
  background-color: #00000023;
  border-radius: 8px;

  > h1 {
    color: rgb(255, 255, 255);
    background-color: #991a1d;
    font-size: 2em;
    margin-top: 0;
    padding: 10px;
    border-radius: 8px 8px 0 0;
  }
`;

export const Imput = styled.div`
  > input {
    border-radius: 4px;
    border: 0;
    padding: 15px 20px;
    width: 90%;
    outline: none;
    margin-top: 16px;
  }

  > label {
    background: green;
    margin-top: 10px;
  }
`;

export const Buttom = styled.div`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #0376f5;
  padding: 16px;
  border-radius: 4px;
  display: inline-block;
  border: none;
  width: 90%;
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
`;
