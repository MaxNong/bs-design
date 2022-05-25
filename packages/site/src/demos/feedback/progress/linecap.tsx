import React from 'react';
import { Progress } from 'eh-design';

export default () => (
  <>
    <Progress strokeLinecap="square" percent={75} />
    <Progress strokeLinecap="square" type="circle" percent={75} />
    <Progress strokeLinecap="square" type="dashboard" percent={75} />
  </>
);
