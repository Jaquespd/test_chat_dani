import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Dashboard from './pages/Dashboard';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/dashboard" component={Dashboard} />
      <GlobalStyle />
    </Router>
  );
};

export default App;
