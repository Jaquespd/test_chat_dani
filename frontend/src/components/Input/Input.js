import React from 'react';

import { Container, Button } from './styled';

const Input = ({ setMessage, sendMessage, message }) => (
  <Container>
    <input
      className="input"
      autofocus="true"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <Button  
      onClick={e => sendMessage(e)}>
      Send
    </Button>
  </Container>
)

export default Input;