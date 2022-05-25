import React from 'react';
import { Mentions } from 'eh-design';

const { Option } = Mentions;

export default () => (
  <Mentions autoSize style={{ width: '100%' }}>
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
);
