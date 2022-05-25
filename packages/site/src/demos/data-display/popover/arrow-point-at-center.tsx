import React from 'react';
import { Popover, Button } from 'eh-design';

const content = (
  <>
    <p>Content</p>
    <p>Content</p>
  </>
);

export default () => (
  <>
    <Popover placement="topLeft" title="Title" content={content}>
      <Button>Align edge / 边缘对齐</Button>
    </Popover>
    <Popover
      placement="topLeft"
      title="Title"
      content={content}
      arrowPointAtCenter
    >
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Popover>
  </>
);
