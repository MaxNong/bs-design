import React from 'react';
import { TimePicker } from 'eh-design';
import moment from 'moment';

const format = 'HH:mm';

export default () => (
  <TimePicker defaultValue={moment('12:08', format)} format={format} />
);
