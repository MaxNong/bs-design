import React from 'react';
import { Badge } from 'bs-design';
import { NotificationOutlined } from '@ant-design/icons';

export default () => (
  <>
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </>
);
