---
title: Breadcrumb 面包屑
nav:
  path: /components
  title: 组件
  order: 2
group:
  path: /navigation
  title: 导航
  order: 3
---

# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 基本介绍

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 代码演示

```tsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */
import React from 'react';
import { Breadcrumb } from 'eh-design';

export default () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
```

## API

### Breadcrumb

| 参数       | 说明                                     | 类型                                        | 默认值 | 版本 |
| ---------- | ---------------------------------------- | ------------------------------------------- | ------ | ---- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | -      |      |
| params     | 路由的参数                               | object                                      | -      |      |
| routes     | router 的路由栈信息                      | [routes\[\]](#routes)                       | -      |      |
| separator  | 分隔符自定义                             | ReactNode                                   | `/`    |      |

### Breadcrumb.Item

| 参数          | 说明                     | 类型                                   | 默认值 | 版本 |
| ------------- | ------------------------ | -------------------------------------- | ------ | ---- |
| className     | 自定义类名               | string                                 | -      |      |
| dropdownProps | 弹出下拉菜单的自定义配置 | [Dropdown](/components/dropdown)       | -      |      |
| href          | 链接的目的地             | string                                 | -      |      |
| overlay       | 下拉菜单的内容           | [Menu](/components/menu) \| () => Menu | -      |      |
| onClick       | 单击事件                 | (e:MouseEvent) => void                 | -      |      |

### Breadcrumb.Separator

| 参数     | 说明           | 类型      | 默认值 | 版本 |
| -------- | -------------- | --------- | ------ | ---- |
| children | 要显示的分隔符 | ReactNode | `/`    |      |

> 注意：在使用 `Breadcrumb.Separator` 时，其父组件的分隔符必须设置为 `separator=""`，否则会出现父组件默认的分隔符。
