import React from 'react';
import { Slider } from 'eh-design';

function formatter(value) {
  return `${value}%`;
}

export default () => (
  <>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </>
);
