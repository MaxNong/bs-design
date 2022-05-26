import React from 'react';
import { Mentions } from 'bs-design';

const { Option } = Mentions;

export default () => (
  <Mentions style={{ width: '100%' }} placement="top">
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
);
