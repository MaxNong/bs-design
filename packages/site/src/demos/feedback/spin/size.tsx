import React from 'react';
import { Spin, Space } from 'eh-design';

export default () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);
