import React from 'react';

import { ContainerSend, MessageBoxSend, ContainerRecive, MessageBoxRecive } from './styles';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <ContainerSend>
          <p>{trimmedName}</p>
          <MessageBoxSend>
            <p>{(text)}</p>
          </MessageBoxSend>
        </ContainerSend>
        )
        : (
          <ContainerRecive>
            <MessageBoxRecive>
              <p>{(text)}</p>
            </MessageBoxRecive>
            <p>{user}</p>
          </ContainerRecive>
        )
  );
}

export default Message;