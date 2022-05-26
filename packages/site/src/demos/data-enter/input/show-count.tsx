import React from 'react';
import { Input } from 'bs-design';

const { TextArea } = Input;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};

export default () => (
  <>
    <Input showCount maxLength={20} onChange={onChange} />
    <br />
    <br />
    <TextArea showCount maxLength={100} onChange={onChange} />
  </>
);
