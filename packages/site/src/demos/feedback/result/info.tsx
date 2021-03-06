import React from 'react';
import { Result, Button } from 'bs-design';

export default () => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
