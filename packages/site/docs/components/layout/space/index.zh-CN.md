---
title: Space 间距
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /layout
  title: 布局
  order: 2
---

# Space 间距

设置组件之间的间距。

## 基本介绍

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 代码演示

```tsx
/**
 * title: 基本用法
 * desc: 相邻组件水平间距。
 */
import React from 'react';
import { Button, Space, Upload, Popconfirm } from 'bs-design';

function SpaceDemo() {
  return (
    <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>Click to Upload</Button>
      </Upload>
      <Popconfirm
        title="Are you sure delete this task?"
        okText="Yes"
        cancelText="No"
      >
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>
  );
}

export default () => <SpaceDemo />;
```

```tsx
/**
 * title: 垂直间距
 * desc: 相邻组件垂直间距。
 */
import React from 'react';
import { Space, Card } from 'bs-design';

function SpaceVertical() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card title="Card" size="small">
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" size="small">
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" size="small">
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

export default () => <SpaceVertical />;
```

```tsx
/**
 * title: 间距大小
 * desc: "间距预设大、中、小三种大小。<br/>
 * 通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。"
 */
import React, { useState } from 'react';
import { Space, Radio, Button } from 'bs-design';

function SpaceSize() {
  const [size, setSize] = useState('small');

  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
}

export default () => <SpaceSize />;
```

```tsx
/**
 * title: 对齐
 * desc: 设置对齐模式。
 */
import './demo.scss';
import React from 'react';
import { Space, Button } from 'bs-design';

export default () => (
  <div className="space-align-container">
    <div className="space-align-block">
      <Space align="center">
        center
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="start">
        start
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="end">
        end
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
    <div className="space-align-block">
      <Space align="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span className="mock-block">Block</span>
      </Space>
    </div>
  </div>
);
```

```tsx
/**
 * title: 自定义尺寸
 * desc: 自定义间距大小。
 */
import React, { useState } from 'react';
import { Space, Slider, Button } from 'bs-design';

function SpaceCustomizeSize() {
  const [size, setSize] = useState(8);

  return (
    <>
      <Slider value={size} onChange={(value) => setSize(value)} />
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
}

export default () => <SpaceCustomizeSize />;
```

```tsx
/**
 * title: 自动换行
 * desc: 自动换行。
 */
import React from 'react';
import { Space, Button } from 'bs-design';

const Demo = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

export default Demo;
```

```tsx
/**
 * title: 分隔符
 * desc: 相邻组件分隔符。
 */
import React from 'react';
import { Space, Typography, Divider } from 'bs-design';

function SpaceSplit() {
  return (
    <Space split={<Divider type="vertical" />}>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
    </Space>
  );
}

export default () => <SpaceSplit />;
```

## API

| 参数      | 说明                                   | 类型                                     | 默认值       | 版本                  |
| --------- | -------------------------------------- | ---------------------------------------- | ------------ | --------------------- |
| align     | 对齐方式                               | `start` \| `end` \|`center` \|`baseline` | -            | 4.2.0                 |
| direction | 间距方向                               | `vertical` \| `horizontal`               | `horizontal` | 4.1.0                 |
| size      | 间距大小                               | [Size](#Size) \| [Size\[\]](#Size)       | `small`      | 4.1.0 \| Array: 4.9.0 |
| split     | 设置拆分                               | ReactNode                                | -            | 4.7.0                 |
| wrap      | 是否自动换行，仅在 `horizontal` 时有效 | boolean                                  | false        | 4.9.0                 |

### Size

`'small' | 'middle' | 'large' | number`
