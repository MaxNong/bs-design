import React from 'react';
import { TimePicker } from 'bs-design';

const { RangePicker } = TimePicker;

export default () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
);
