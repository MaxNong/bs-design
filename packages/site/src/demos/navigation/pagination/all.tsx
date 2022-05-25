import React from 'react';
import { Pagination } from 'eh-design';

export default () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
);
