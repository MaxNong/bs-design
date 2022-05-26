import React from 'react';
import { TimePicker } from 'bs-design';
import moment from 'moment';

const format = 'HH:mm';

export default () => (
  <TimePicker defaultValue={moment('12:08', format)} format={format} />
);
