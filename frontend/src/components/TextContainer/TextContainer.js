import React from 'react';
import logo from '../../assets/logo.png';

import userIcon from '../../assets/user.png';
import chatIcon from '../../assets/chat.png';

import {
  Container,
  Header,
  Room,
  Users,
  ActiveContainer,
  ActiveItem,
} from './styles';

const TextContainer = ({ users }) => (
  <Container>
    <Header>
      <img src={logo} alt="Swiftfox logo" />
      <h1>Swiftfox Chat</h1>`
    </Header>
    <Room>
      <img src={chatIcon} alt="Bollons" />
      <h1>Room Name:</h1>
    </Room>
    <h2>{users && users[0].room}</h2>
    {users ? (
      <>
        <Users>
          <img src={userIcon} alt="Swiftfox logo" />
          <h1> Users</h1>
        </Users>
        <ActiveContainer>
          <h2>
            {users.map(({ name }) => (
              <ActiveItem key={name}>{name}</ActiveItem>
            ))}
          </h2>
        </ActiveContainer>
      </>
    ) : null}
  </Container>
);

export default TextContainer;
