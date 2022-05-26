import React from 'react';
import { TimePicker } from 'bs-design';
import moment from 'moment';

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

export default () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
    popupClassName="myCustomClassName"
  />
);
