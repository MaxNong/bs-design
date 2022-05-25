import React from 'react';
import { Progress } from 'eh-design';

export default () => (
  <>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </>
);
