import React from 'react';
import { DatePicker, Space } from 'eh-design';

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
);
