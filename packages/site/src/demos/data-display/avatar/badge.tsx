import React from 'react';
import { Avatar, Badge } from 'eh-design';
import { UserOutlined } from '@ant-design/icons';

export default () => (
  <>
    <span className="avatar-item">
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
    <span>
      <Badge dot>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
  </>
);
