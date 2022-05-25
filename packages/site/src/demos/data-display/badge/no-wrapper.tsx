import React from 'react';
import { Badge, Space, Switch } from 'eh-design';
import { ClockCircleOutlined } from '@ant-design/icons';

const Demo = () => {
  const [show, setShow] = React.useState(true);

  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 25 : 0} />
      <Badge
        count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0}
      />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />
    </Space>
  );
};

export default Demo;
