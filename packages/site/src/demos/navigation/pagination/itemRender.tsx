import React from 'react';
import { Pagination } from 'eh-design';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

export default () => <Pagination total={500} itemRender={itemRender} />;
