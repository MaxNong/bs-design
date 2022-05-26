import React from 'react';
import { Transfer, Space } from 'bs-design';

const Status = () => (
  <Space direction="vertical">
    <Transfer status="error" />
    <Transfer status="warning" showSearch />
  </Space>
);

export default () => <Status />;
