import React from 'react';
import { Badge, Avatar } from 'bs-design';

export default () => (
  <>
    <Badge size="default" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge size="small" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
);
