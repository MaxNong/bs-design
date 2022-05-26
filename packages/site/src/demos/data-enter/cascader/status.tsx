import React from 'react';
import { Cascader, Space } from 'bs-design';

const Validation: React.FC = () => (
  <Space direction="vertical">
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
);

export default () => <Validation />;
