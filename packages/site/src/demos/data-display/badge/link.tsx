import React from 'react';
import { Badge, Avatar } from 'bs-design';

export default () => (
  <a href="#">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
);
