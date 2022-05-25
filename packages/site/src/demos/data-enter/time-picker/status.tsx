import React from 'react';
import { TimePicker, Space } from 'eh-design';

const Status: React.FC = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
);

export default () => <Status />;
