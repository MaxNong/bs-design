import React from 'react';
import { InputNumber } from 'eh-design';

function onChange(value) {
  console.log('changed', value);
}

export default () => (
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
);
