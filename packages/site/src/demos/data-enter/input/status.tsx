import React from 'react';
import { Input, Space } from 'bs-design';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

const ValidateInputs: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input
      status="error"
      prefix={<ClockCircleOutlined />}
      placeholder="Error with prefix"
    />
    <Input
      status="warning"
      prefix={<ClockCircleOutlined />}
      placeholder="Warning with prefix"
    />
  </Space>
);

export default () => <ValidateInputs />;
