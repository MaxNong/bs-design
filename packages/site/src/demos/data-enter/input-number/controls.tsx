import React from 'react';
import { InputNumber } from 'eh-design';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default () => (
  <InputNumber
    controls={{ upIcon: <ArrowUpOutlined />, downIcon: <ArrowDownOutlined /> }}
  />
);
