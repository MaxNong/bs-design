import React from 'react';
import { Badge, Avatar } from 'bs-design';

export default () => (
  <Badge count={5} offset={[10, 10]}>
    <Avatar shape="square" size="large" />
  </Badge>
);
