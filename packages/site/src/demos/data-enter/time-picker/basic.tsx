import React from 'react';
import { TimePicker } from 'eh-design';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
  />
);
