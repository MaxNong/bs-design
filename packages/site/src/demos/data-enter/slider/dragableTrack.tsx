import React from 'react';
import { Slider } from 'eh-design';

export default () => (
  <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
);
