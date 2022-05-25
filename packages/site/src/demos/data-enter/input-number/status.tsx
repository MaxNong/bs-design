import React from 'react';
import { InputNumber, Space } from 'eh-design';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

const ValidateInputs: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <InputNumber status="error" style={{ width: '100%' }} />
    <InputNumber status="warning" style={{ width: '100%' }} />
    <InputNumber
      status="error"
      style={{ width: '100%' }}
      prefix={<ClockCircleOutlined />}
    />
    <InputNumber
      status="warning"
      style={{ width: '100%' }}
      prefix={<ClockCircleOutlined />}
    />
  </Space>
);

export default () => <ValidateInputs />;
