import React from 'react';
import { message, Button } from 'eh-design';

const info = () => {
  message.info('This is a normal message');
};

export default () => (
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>
);
