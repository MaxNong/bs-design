import React from 'react';
import { Input } from 'bs-design';

const { TextArea } = Input;

const onChange = (e) => {
  console.log(e);
};

export default () => (
  <>
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea
      placeholder="textarea with clear icon"
      allowClear
      onChange={onChange}
    />
  </>
);
