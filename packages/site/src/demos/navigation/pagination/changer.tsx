import React from 'react';
import { Pagination } from 'eh-design';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

export default () => (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </>
);
