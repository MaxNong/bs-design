import React from 'react';
import { Popconfirm } from 'eh-design';
import { QuestionCircleOutlined } from '@ant-design/icons';

export default () => (
  <Popconfirm
    title="Are you sure？"
    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
