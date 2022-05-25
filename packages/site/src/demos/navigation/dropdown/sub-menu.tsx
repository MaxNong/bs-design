import React from 'react';
import { Menu, Dropdown, Space } from 'eh-design';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const menu = (
  <Menu
    items={[
      {
        type: 'group',
        label: 'Group title',
        children: [
          {
            key: '1',
            label: '1st menu item',
          },
          {
            key: '2',
            label: '2nd menu item',
          },
        ],
      },
      {
        key: 'sub',
        label: 'sub menu',
        children: [
          {
            key: '3',
            label: '3rd menu item',
          },
          {
            key: '4',
            label: '4th menu item',
          },
        ],
      },
      {
        label: 'disabled sub menu',
        key: 'disabled',
        disabled: true,
        children: [
          {
            key: '5',
            label: '5d menu item',
          },
          {
            key: '6',
            label: '6th menu item',
          },
        ],
      },
    ]}
  />
);

export default () => (
  <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Cascading menu
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
