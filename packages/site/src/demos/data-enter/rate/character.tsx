import React from 'react';
import { Rate } from 'eh-design';
import { HeartOutlined } from '@ant-design/icons';

export default () => (
  <>
    <Rate character={<HeartOutlined />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </>
);
