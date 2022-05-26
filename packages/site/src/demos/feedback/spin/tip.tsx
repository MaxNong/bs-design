import React from 'react';
import { Spin, Alert } from 'bs-design';

export default () => (
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
);
