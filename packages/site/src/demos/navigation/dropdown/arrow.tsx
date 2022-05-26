import React from 'react';
import { Menu, Dropdown, Button } from 'bs-design';

const menu = (
  <Menu
    items={[
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

export default () => (
  <>
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottom" arrow>
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown overlay={menu} placement="topLeft" arrow>
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="top" arrow>
      <Button>top</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topRight" arrow>
      <Button>topRight</Button>
    </Dropdown>
  </>
);
