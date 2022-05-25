import React from 'react';
import { Tooltip } from 'eh-design';

export default () => (
  <Tooltip destroyTooltipOnHide={{ keepParent: false }} title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
);
