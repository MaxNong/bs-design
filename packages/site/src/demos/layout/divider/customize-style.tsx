import React from 'react';
import { Divider } from 'eh-design';

export default () => (
  <>
    <Divider style={{ borderWidth: 2, borderColor: '#7cb305' }} />
    <Divider style={{ borderColor: '#7cb305' }} dashed />
    <Divider style={{ borderColor: '#7cb305' }} dashed>
      Text
    </Divider>
    <Divider type="vertical" style={{ height: 60, borderColor: '#7cb305' }} />
    <Divider
      type="vertical"
      style={{ height: 60, borderColor: '#7cb305' }}
      dashed
    />
  </>
);
