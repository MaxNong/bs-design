import React from 'react';
import { Result, Button } from 'eh-design';

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
