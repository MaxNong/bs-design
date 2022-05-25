---
title: Tag 标签
nav:
  path: /components
  title: 组件
  order: 3
group:
  path: /data-display
  title: 数据展示
  order: 5
---

# Tag 标签

进行标记和分类的小标签。

```jsx
import React from 'react';
import { Tag } from 'eh-design';

export default () => (
  <>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
    <Tag color="activated">已激活</Tag>
    <Tag color="inactive">未激活</Tag>
    <Tag color="cancelled">已注销</Tag>
    <Tag color="failure">失败态</Tag>
  </>
);
```

## 基本介绍

- 用于标记事物的属性和维度。
- 进行分类。

## API

### Tag

| 参数      | 说明                                                     | 类型        | 默认值 |
| --------- | -------------------------------------------------------- | ----------- | ------ |
| closable  | 标签是否可以关闭（点击默认关闭）                         | boolean     | false  |
| closeIcon | 自定义关闭按钮                                           | ReactNode   | -      |
| color     | 标签色                                                   | string      | -      |
| icon      | 设置图标                                                 | ReactNode   |
| visible   | 是否显示标签                                             | boolean     | true   |
| onClose   | 关闭时的回调（可通过 e.preventDefault() 来阻止默认行为） | (e) => void | -      |

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |
