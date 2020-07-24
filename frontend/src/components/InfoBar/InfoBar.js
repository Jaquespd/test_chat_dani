import React from 'react';

import LogoutIcon from '../../assets/logout.png';
import {Container, Room, Buttom } from './styles';

const InfoBar = ({ room }) => (
  <Container>
    <Room>
      <h3>{room}</h3>
    </Room>
    <Buttom>
      <a href="/"><img src={LogoutIcon} alt="Swiftfox logo"/></a>
    </Buttom>
  </Container>
);

export default InfoBar;