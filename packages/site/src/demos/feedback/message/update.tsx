import React from 'react';
import { Button, message } from 'bs-design';

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

export default () => (
  <Button type="primary" onClick={openMessage}>
    Open the message box
  </Button>
);
