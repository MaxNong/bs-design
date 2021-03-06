import React from 'react';
import { Avatar } from 'bs-design';
import { AntDesignOutlined } from '@ant-design/icons';

export default () => (
  <Avatar
    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    icon={<AntDesignOutlined />}
  />
);
