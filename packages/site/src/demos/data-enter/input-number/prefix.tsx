import React from 'react';
import { InputNumber } from 'bs-design';
import {
  InfoCircleOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';

export default () => (
  <>
    <InputNumber prefix="￥" style={{ width: '100%' }} />
    <br />
    <br />
    <InputNumber
      addonBefore={<UserOutlined />}
      prefix="￥"
      style={{ width: '100%' }}
    />
    <br />
    <br />
    <InputNumber prefix="￥" disabled style={{ width: '100%' }} />
  </>
);
