import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

import { Container, Main, Imput, Buttom } from './styles';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container>
      <img src={logo} alt="Swiftfox logo" /> 
      <Main>
        <h1>Swiftfox Chat</h1>
        <Imput>
          <input placeholder="Name" autofocus="true" type="text" onChange={(event) => setName(event.target.value)} />
        </Imput>
        <Imput>
          <input placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)} />
        </Imput>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <Buttom type="submit">Sign In</Buttom>
        </Link>
      </Main>
    </Container>
  );
}
