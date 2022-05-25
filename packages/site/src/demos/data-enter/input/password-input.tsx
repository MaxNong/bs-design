import React from 'react';
import { Input, Space } from 'eh-design';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default () => (
  <Space direction="vertical">
    <Input.Password placeholder="input password" />
    <Input.Password
      placeholder="input password"
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  </Space>
);
