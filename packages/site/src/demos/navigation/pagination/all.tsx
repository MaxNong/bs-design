import React from 'react';
import { Pagination } from 'bs-design';

export default () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
);
