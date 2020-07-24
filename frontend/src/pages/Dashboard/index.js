import React from 'react';

import Chat from '../../components/Chat/Chat';
// import { Container } from './styles';

function Dashboard({ location }) {
  return (
    <div>
      <Chat location={location} />
      <h1>Componente</h1>
    </div>
  );
}

export default Dashboard;
