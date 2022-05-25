---
title: Affix 固钉
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /navigation
  title: 导航
  order: 3
---

# Affix 固钉

将页面元素钉在可视范围。

## 基本介绍

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 代码演示

```tsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */
import React, { useState } from 'react';
import { Affix, Button } from 'eh-design';

const Demo: React.FC = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 50)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 50)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};

export default Demo;
```

```tsx
/**
 * title: 固定状态改变的回调
 * desc: 可以获得是否固定的状态。
 */
import React, { useState } from 'react';
import { Affix, Button } from 'eh-design';

export default () => (
  <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);
```

```tsx
/**
 * title: 滚动容器
 * desc: 用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window。
 */
import './demo.scss';
import React, { useState } from 'react';
import { Affix, Button } from 'eh-design';

const Demo: React.FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};

export default Demo;
```

## API

| 成员         | 说明                                                                   | 类型                        | 默认值       |
| ------------ | ---------------------------------------------------------------------- | --------------------------- | ------------ |
| offsetBottom | 距离窗口底部达到指定偏移量后触发                                       | number                      | -            |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发                                       | number                      | 0            |
| target       | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement           | () => window |
| onChange     | 固定状态改变时触发的回调函数                                           | (affixed?: boolean) => void | -            |

**注意：**`Affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `Affix` 为绝对定位：

```jsx | pure
import React from 'react';
import { Affix } from 'eh-design';

<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>;
```

## FAQ

### Affix 使用 `target` 绑定容器时，元素会跑到容器外。

从性能角度考虑，我们只监听容器滚动事件。如果希望任意滚动，你可以在窗体添加滚动监听：<https://codesandbox.io/s/2xyj5zr85p>

相关 issue：[#3938](https://github.com/ant-design/ant-design/issues/3938) [#5642](https://github.com/ant-design/ant-design/issues/5642) [#16120](https://github.com/ant-design/ant-design/issues/16120)

### Affix 在水平滚动容器中使用时， 元素 `left` 位置不正确。

Affix 一般只适用于单向滚动的区域，只支持在垂直滚动容器中使用。如果希望在水平容器中使用，你可以考虑使用 原生 `position: sticky` 实现。

相关 issue: [#29108](https://github.com/ant-design/ant-design/issues/29108)
