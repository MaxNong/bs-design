import React from 'react';
import { TimePicker } from 'eh-design';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => (
  <>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker
      use12Hours
      format="h:mm:ss A"
      onChange={onChange}
      style={{ width: 140 }}
    />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </>
);
