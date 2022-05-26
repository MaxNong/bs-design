import React from 'react';
import { Slider } from 'bs-design';

function formatter(value) {
  return `${value}%`;
}

export default () => (
  <>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </>
);
