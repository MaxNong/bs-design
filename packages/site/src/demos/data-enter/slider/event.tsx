import React from 'react';
import { Slider } from 'bs-design';

function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

export default () => (
  <>
    <Slider
      defaultValue={30}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </>
);
