import React from 'react';
import { Timeline } from 'bs-design';
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => (
  <Timeline mode="right">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item
      dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
      color="red"
    >
      Technical testing 2015-09-01
    </Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
);
