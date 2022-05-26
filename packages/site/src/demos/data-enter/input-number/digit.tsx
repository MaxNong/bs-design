import React from 'react';
import { InputNumber } from 'bs-design';

function onChange(value: string) {
  console.log('changed', value);
}

export default () => (
  <InputNumber<string>
    style={{ width: 200 }}
    defaultValue="1"
    min="0"
    max="10"
    step="0.00000000000001"
    onChange={onChange}
    stringMode
  />
);
