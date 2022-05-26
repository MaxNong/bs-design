import React from 'react';
import { InputNumber, Checkbox, Space } from 'bs-design';

const App = () => {
  const [keyboard, setKeyboard] = React.useState(true);
  return (
    <Space>
      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  );
};

export default App;
