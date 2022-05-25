import React from 'react';
import { Button, Space } from 'eh-design';

const ButtonDemo = (): JSX.Element => {
  return (
    <Space>
      <Button type="primary" size="large">
        Primary Button
      </Button>
      <br /> <br />
      <Button type="primary" size="middle">
        Primary Button
      </Button>
      <br /> <br />
      <Button type="primary" size="small">
        Primary Button
      </Button>
    </Space>
  );
};

export default ButtonDemo;
