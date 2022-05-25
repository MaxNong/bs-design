import React from 'react';
import { Result, Button } from 'eh-design';

export default () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);
