import React from 'react';
import { Badge, Avatar } from 'bs-design';

export default () => (
  <>
    <Badge count={5} status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
  </>
);
