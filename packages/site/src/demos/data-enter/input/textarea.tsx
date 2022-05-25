import React from 'react';
import { Input } from 'eh-design';

const { TextArea } = Input;

export default () => (
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  </>
);
