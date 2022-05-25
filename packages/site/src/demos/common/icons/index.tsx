import React from 'react';
import { Space, Icon } from 'eh-design';

const IconDemo = (): JSX.Element => {
  return (
    <Space>
      <Icon href="icon-pickup" size={30}/>
      <Icon href="icon-delete-fill" size={30}/>
      <Icon href="icon-set-fill" size={30}/>
      <Icon href="icon-check-circle-fill" size={30}/>
    </Space>
  );
};

export default IconDemo;
