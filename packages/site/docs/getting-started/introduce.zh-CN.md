---
title: 介绍
nav:
  path: /docs
  title: 文档
  order: 1
group:
  path: /introduce
  title: 介绍
  order: 1
---

## EH Design
一个基于内部统一规范的B端产品UI库。

## 安装
```shell
npm install eh-design --save
```
## 示例
```jsx | pure
import React from 'react';
import { Button } from 'eh-design';

export default () => <Button type="primary">按钮</Button>;
```

引入样式：
```jsx | pure
import 'eh-design/dist/eh-design.css'; // or 'eh-design/dist/eh-design.less'
```
