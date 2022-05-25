import React from 'react';
import { Result, Button } from 'eh-design';
import { SmileOutlined } from '@ant-design/icons';

export default () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);
