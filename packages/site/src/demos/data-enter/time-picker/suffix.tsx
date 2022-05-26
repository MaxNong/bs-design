import React from 'react';
import { TimePicker } from 'bs-design';
import moment from 'moment';
import { SmileOutlined } from '@ant-design/icons';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => (
  <TimePicker
    suffixIcon={<SmileOutlined />}
    onChange={onChange}
    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
  />
);
