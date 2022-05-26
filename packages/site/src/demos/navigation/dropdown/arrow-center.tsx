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
    <Dropdown
      overlay={menu}
      placement="bottomLeft"
      arrow={{ pointAtCenter: true }}
    >
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="bottomRight"
      arrow={{ pointAtCenter: true }}
    >
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown
      overlay={menu}
      placement="topLeft"
      arrow={{ pointAtCenter: true }}
    >
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="top" arrow={{ pointAtCenter: true }}>
      <Button>top</Button>
    </Dropdown>
    <Dropdown
      overlay={menu}
      placement="topRight"
      arrow={{ pointAtCenter: true }}
    >
      <Button>topRight</Button>
    </Dropdown>
  </>
);
