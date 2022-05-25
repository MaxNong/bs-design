import React from 'react';
import { Progress } from 'eh-design';

export default () => (
  <>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </>
);
