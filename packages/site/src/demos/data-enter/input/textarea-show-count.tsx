import React from 'react';
import { Input } from 'bs-design';

const { TextArea } = Input;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};

export default () => (
  <TextArea
    showCount
    maxLength={100}
    style={{ height: 120 }}
    onChange={onChange}
  />
);
