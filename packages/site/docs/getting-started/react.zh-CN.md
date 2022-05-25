---
title: create-react-app中使用
nav:
  path: /docs
  title: 文档
  order: 1
group:
  path: /create-react-app
  title: create-react-app中使用
  order: 2
---


[create-react-app](https://github.com/facebookincubator/create-react-app) 是业界最优秀的 React 应用开发工具之一，本文会尝试在 create-react-app 创建的工程中使用 eh-design 组件，并自定义 webpack 的配置以满足各类工程化需求。

---

## 安装和初始化

在开始之前，你可能需要安装 [yarn](https://github.com/yarnpkg/yarn/)。

```bash
$ yarn create react-app react-demo

# or

$ npx create-react-app react-demo
```

工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。

然后我们进入项目并启动。

```bash
$ cd react-demo
$ yarn start
```

此时浏览器会访问 http://localhost:3000/ ，看到 `Welcome to React` 的界面就算成功了。

## 引入 eh-design

这是 create-react-app 生成的默认目录结构。

``` jsx | pure
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```

现在从 yarn 或 npm 安装并引入 eh-design。
```shell
yarn add eh-design
```

修改 src/App.js，引入 eh-design 的按钮组件。

```jsx | pure
import React from 'react';
import { Button } from 'eh-design';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```


