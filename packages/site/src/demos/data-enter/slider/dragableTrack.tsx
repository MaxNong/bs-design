import React from 'react';
import { Slider } from 'bs-design';

export default () => (
  <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
);
