import React from 'react';
import { Select, Space } from 'bs-design';

const Status: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Select status="error" style={{ width: '100%' }} />
    <Select status="warning" style={{ width: '100%' }} />
  </Space>
);

export default () => <Status />;
