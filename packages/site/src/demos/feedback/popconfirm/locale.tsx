import React from 'react';
import { Popconfirm } from 'eh-design';

export default () => (
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
);
