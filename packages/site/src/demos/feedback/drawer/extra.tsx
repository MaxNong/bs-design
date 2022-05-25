import React, { useState } from 'react';
import { Drawer, Button, Space, Radio } from 'eh-design';
import { DrawerProps } from 'antd/es/drawer';
import { RadioChangeEvent } from 'antd/es/radio';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
  const showDrawer = () => {
    setVisible(true);
  };
  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
