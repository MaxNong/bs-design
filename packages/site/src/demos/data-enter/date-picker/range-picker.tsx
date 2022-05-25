import React from 'react';
import { DatePicker, Space } from 'eh-design';

const { RangePicker } = DatePicker;

export default () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" />
  </Space>
);
