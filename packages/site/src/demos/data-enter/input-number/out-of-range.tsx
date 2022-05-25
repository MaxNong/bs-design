import React from 'react';
import { InputNumber, Button, Space } from 'eh-design';

const Demo = () => {
  const [value, setValue] = React.useState<string | number>('99');

  return (
    <Space>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
      <Button
        type="primary"
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};

export default Demo;
